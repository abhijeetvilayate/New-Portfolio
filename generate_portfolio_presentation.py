import os
import sys
from pptx import Presentation
from pptx.util import Inches, Pt
from pptx.enum.text import PP_ALIGN
from pptx.enum.shapes import MSO_SHAPE
from pptx.dml.color import RGBColor

# -----------------------------------------------------------------------------
# PRESENTATION CONFIGURATION: 16:9 Widescreen (Optimal for LinkedIn Documents)
# -----------------------------------------------------------------------------
prs = Presentation()
prs.slide_width = Inches(13.333)
prs.slide_height = Inches(7.5)

# Color Palette: Modern Executive Dark Tech Theme
DARK_BG       = RGBColor(11, 19, 43)      # #0B132B Deep Midnight Navy
DARK_CARD     = RGBColor(28, 37, 65)      # #1C2541 Slate Card
DARK_CARD_BRD = RGBColor(48, 64, 100)     # #304064 Subtle Card Border
DARK_SURFACE  = RGBColor(20, 27, 45)      # #141B2D Inner Card Surface
WHITE         = RGBColor(255, 255, 255)   # #FFFFFF Clean White
SILVER_TEXT   = RGBColor(226, 232, 240)   # #E2E8F0 Main Body Text
MUTED_TEXT    = RGBColor(148, 163, 184)   # #94A3B8 Muted Caption Text
LIGHT_SLATE   = RGBColor(203, 213, 225)   # #CBD5E1 Subtitle Text

# Accent Colors matching Abhijeet's Portfolio Branding
PURPLE_ACCENT = RGBColor(139, 92, 246)    # #8B5CF6 Electric Purple / Violet
CYAN_ACCENT   = RGBColor(14, 165, 233)    # #0EA5E9 Sky Cyan
EMERALD       = RGBColor(16, 185, 129)    # #10B981 Success Green
AMBER         = RGBColor(245, 158, 11)    # #F59E0B Warm Amber / Gold
BLUE_ACCENT   = RGBColor(59, 130, 246)    # #3B82F6 Royal Blue
ROSE_ACCENT   = RGBColor(244, 63, 94)     # #F43F5E Coral Rose

# Image Assets
BASE_DIR = os.path.abspath(os.path.dirname(__file__))
ASSETS_DIR = os.path.join(BASE_DIR, "src", "assets")

IMG_PROFILE     = os.path.join(ASSETS_DIR, "ME.png")
IMG_LOGO        = os.path.join(ASSETS_DIR, "av-logo.png")
IMG_ERP         = os.path.join(ASSETS_DIR, "Management.png")
IMG_GULF_AGENCY = os.path.join(ASSETS_DIR, "Netflix-clone.png")
IMG_PORTFOLIO   = os.path.join(ASSETS_DIR, "New portfolio.png")

blank_layout = prs.slide_layouts[6]

# -----------------------------------------------------------------------------
# REUSABLE HELPER FUNCTIONS
# -----------------------------------------------------------------------------
def set_slide_background(slide, color=DARK_BG):
    bg = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, 0, 0, prs.slide_width, prs.slide_height)
    bg.fill.solid()
    bg.fill.fore_color.rgb = color
    bg.line.fill.background()
    return bg

def add_header(slide, tag_text, title_text, subtitle_text, accent_color=PURPLE_ACCENT):
    # Tag Badge
    tag_width = Inches(max(2.2, len(tag_text) * 0.12 + 0.5))
    tag_box = slide.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.8), Inches(0.4), tag_width, Inches(0.32))
    tag_box.fill.solid()
    tag_box.fill.fore_color.rgb = RGBColor(30, 41, 75)
    tag_box.line.color.rgb = accent_color
    tag_box.line.width = Pt(1)
    tf = tag_box.text_frame
    tf.word_wrap = False
    p = tf.paragraphs[0]
    p.text = tag_text.upper()
    p.alignment = PP_ALIGN.CENTER
    p.font.name = "Segoe UI"
    p.font.size = Pt(9.5)
    p.font.bold = True
    p.font.color.rgb = accent_color

    # Title Box
    title_box = slide.shapes.add_textbox(Inches(0.8), Inches(0.75), Inches(11.7), Inches(0.55))
    tf_title = title_box.text_frame
    tf_title.word_wrap = True
    p_title = tf_title.paragraphs[0]
    p_title.text = title_text
    p_title.font.name = "Segoe UI"
    p_title.font.size = Pt(22)
    p_title.font.bold = True
    p_title.font.color.rgb = WHITE

    # Subtitle Box
    sub_box = slide.shapes.add_textbox(Inches(0.8), Inches(1.3), Inches(11.7), Inches(0.4))
    tf_sub = sub_box.text_frame
    tf_sub.word_wrap = True
    p_sub = tf_sub.paragraphs[0]
    p_sub.text = subtitle_text
    p_sub.font.name = "Segoe UI"
    p_sub.font.size = Pt(11)
    p_sub.font.color.rgb = MUTED_TEXT

def add_footer(slide, current_slide, total_slides=10):
    # Divider Line
    line = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0.8), Inches(7.0), Inches(11.733), Inches(0.012))
    line.fill.solid()
    line.fill.fore_color.rgb = DARK_CARD_BRD
    line.line.fill.background()

    # Left Branding
    left_box = slide.shapes.add_textbox(Inches(0.8), Inches(7.05), Inches(8), Inches(0.35))
    p_left = left_box.text_frame.paragraphs[0]
    p_left.text = "Abhijeet Vilayate • Full Stack Developer Portfolio • LinkedIn Document Showcase"
    p_left.font.name = "Segoe UI"
    p_left.font.size = Pt(9.5)
    p_left.font.color.rgb = MUTED_TEXT

    # Right Pagination / CTA
    right_box = slide.shapes.add_textbox(Inches(10.533), Inches(7.05), Inches(2.0), Inches(0.35))
    p_right = right_box.text_frame.paragraphs[0]
    p_right.alignment = PP_ALIGN.RIGHT
    p_right.text = f"{current_slide} / {total_slides}  |  Swipe >"
    p_right.font.name = "Segoe UI"
    p_right.font.size = Pt(9.5)
    p_right.font.bold = True
    p_right.font.color.rgb = PURPLE_ACCENT

def create_card(slide, left, top, width, height, bg_color=DARK_CARD, border_color=DARK_CARD_BRD):
    card = slide.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, left, top, width, height)
    card.fill.solid()
    card.fill.fore_color.rgb = bg_color
    card.line.color.rgb = border_color
    card.line.width = Pt(1)
    return card

# -----------------------------------------------------------------------------
# SLIDE 1: COVER / HIGH-IMPACT TITLE SLIDE
# -----------------------------------------------------------------------------
slide1 = prs.slides.add_slide(blank_layout)
set_slide_background(slide1)

# Large ambient decorative backdrop card
cover_bg = create_card(slide1, Inches(0.8), Inches(0.6), Inches(11.733), Inches(6.3), bg_color=DARK_SURFACE, border_color=DARK_CARD_BRD)

# Tag Badge
badge = slide1.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(1.3), Inches(1.1), Inches(3.6), Inches(0.36))
badge.fill.solid()
badge.fill.fore_color.rgb = RGBColor(30, 41, 75)
badge.line.color.rgb = PURPLE_ACCENT
badge.line.width = Pt(1)
p_badge = badge.text_frame.paragraphs[0]
p_badge.text = "ENGINEERING PORTFOLIO 2026"
p_badge.alignment = PP_ALIGN.CENTER
p_badge.font.name = "Segoe UI"
p_badge.font.size = Pt(10)
p_badge.font.bold = True
p_badge.font.color.rgb = PURPLE_ACCENT

# Main Name Header
name_box = slide1.shapes.add_textbox(Inches(1.3), Inches(1.55), Inches(6.8), Inches(1.1))
tf_name = name_box.text_frame
tf_name.word_wrap = True
p_name = tf_name.paragraphs[0]
p_name.text = "Abhijeet Vilayate"
p_name.font.name = "Segoe UI"
p_name.font.size = Pt(40)
p_name.font.bold = True
p_name.font.color.rgb = WHITE

# Professional Role Title
role_box = slide1.shapes.add_textbox(Inches(1.3), Inches(2.65), Inches(6.8), Inches(0.55))
tf_role = role_box.text_frame
tf_role.word_wrap = True
p_role = tf_role.paragraphs[0]
p_role.text = "Full Stack Developer  |  Java & Modern Web Systems"
p_role.font.name = "Segoe UI"
p_role.font.size = Pt(17)
p_role.font.bold = True
p_role.font.color.rgb = CYAN_ACCENT

# Impact Summary Paragraph
summary_box = slide1.shapes.add_textbox(Inches(1.3), Inches(3.2), Inches(6.8), Inches(1.1))
tf_summary = summary_box.text_frame
tf_summary.word_wrap = True
p_sum = tf_summary.paragraphs[0]
p_sum.text = (
    "Passionate software engineer building resilient, scalable, and user-centric web applications. "
    "Specialized in high-performance Java/Spring Boot backends, responsive React 19 single-page frontends, "
    "and secure RESTful architectures."
)
p_sum.font.name = "Segoe UI"
p_sum.font.size = Pt(12)
p_sum.font.color.rgb = SILVER_TEXT

# Tech Stack Pill Container
tech_pills = ["Java", "Spring Boot", "React 19", "Oracle SQL", "REST APIs", "Vite", "MongoDB"]
pill_left = Inches(1.3)
pill_top = Inches(4.45)
for t in tech_pills:
    pw = Inches(len(t) * 0.12 + 0.45)
    pb = slide1.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, pill_left, pill_top, pw, Inches(0.32))
    pb.fill.solid()
    pb.fill.fore_color.rgb = DARK_CARD
    pb.line.color.rgb = DARK_CARD_BRD
    pb.line.width = Pt(1)
    ptf = pb.text_frame
    pp = ptf.paragraphs[0]
    pp.text = t
    pp.alignment = PP_ALIGN.CENTER
    pp.font.name = "Segoe UI"
    pp.font.size = Pt(9.5)
    pp.font.bold = True
    pp.font.color.rgb = WHITE
    pill_left += pw + Inches(0.12)

# Quick Info Footer inside Cover
info_card = create_card(slide1, Inches(1.3), Inches(5.1), Inches(6.8), Inches(1.4), bg_color=DARK_CARD, border_color=DARK_CARD_BRD)
itf = info_card.text_frame
itf.word_wrap = True
ip1 = itf.paragraphs[0]
ip1.text = "Key Highlights & Availability"
ip1.font.name = "Segoe UI"
ip1.font.size = Pt(11)
ip1.font.bold = True
ip1.font.color.rgb = PURPLE_ACCENT

ip2 = itf.add_paragraph()
ip2.text = "• Location: Pune, Maharashtra, India  |  Status: Open to Full-Time & Freelance Roles"
ip2.font.name = "Segoe UI"
ip2.font.size = Pt(10)
ip2.font.color.rgb = SILVER_TEXT

ip3 = itf.add_paragraph()
ip3.text = "• Education: B.E. Chemical Engineering, AISSMS COE Pune (Analytical Problem Solving)"
ip3.font.name = "Segoe UI"
ip3.font.size = Pt(10)
ip3.font.color.rgb = SILVER_TEXT

ip4 = itf.add_paragraph()
ip4.text = "• GitHub: github.com/abhijeetvilayate  |  LinkedIn: linkedin.com/in/abhijeet-vilayate-7abb50290"
ip4.font.name = "Segoe UI"
ip4.font.size = Pt(10)
ip4.font.color.rgb = MUTED_TEXT

# RIGHT SIDE: Hero Profile Picture Container
right_card = create_card(slide1, Inches(8.5), Inches(1.1), Inches(3.6), Inches(5.4), bg_color=DARK_CARD, border_color=PURPLE_ACCENT)

# Profile Photo
if os.path.exists(IMG_PROFILE):
    slide1.shapes.add_picture(IMG_PROFILE, Inches(8.85), Inches(1.35), width=Inches(2.9), height=Inches(3.8))

# Floating "Open to Work" Badge over image bottom
work_badge = slide1.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(8.95), Inches(5.35), Inches(2.7), Inches(0.45))
work_badge.fill.solid()
work_badge.fill.fore_color.rgb = RGBColor(16, 185, 129)
work_badge.line.fill.background()
wb_tf = work_badge.text_frame
wb_p = wb_tf.paragraphs[0]
wb_p.text = "✓  OPEN TO WORK"
wb_p.alignment = PP_ALIGN.CENTER
wb_p.font.name = "Segoe UI"
wb_p.font.size = Pt(11)
wb_p.font.bold = True
wb_p.font.color.rgb = WHITE

# Swipe Guide at bottom
swipe_txt = slide1.shapes.add_textbox(Inches(8.5), Inches(5.95), Inches(3.6), Inches(0.4))
sw_p = swipe_txt.text_frame.paragraphs[0]
sw_p.alignment = PP_ALIGN.CENTER
sw_p.text = "Swipe to explore projects & skills →"
sw_p.font.name = "Segoe UI"
sw_p.font.size = Pt(10)
sw_p.font.color.rgb = MUTED_TEXT


# -----------------------------------------------------------------------------
# SLIDE 2: ABOUT ME & ENGINEERING BACKGROUND
# -----------------------------------------------------------------------------
slide2 = prs.slides.add_slide(blank_layout)
set_slide_background(slide2)
add_header(slide2, "ABOUT ME", "Engineering Background & Problem-Solving Mindset", "Combining rigorous engineering principles with cutting-edge software development")
add_footer(slide2, 2)

# 3 Column Cards
c_width = Inches(3.65)
c_height = Inches(5.0)
c_top = Inches(1.8)

# Col 1: My Story & Journey
card1 = create_card(slide2, Inches(0.8), c_top, c_width, c_height)
tf1 = card1.text_frame
tf1.word_wrap = True
p = tf1.paragraphs[0]
p.text = "My Journey & Story"
p.font.name = "Segoe UI"
p.font.size = Pt(15)
p.font.bold = True
p.font.color.rgb = PURPLE_ACCENT

items_c1 = [
    ("Origin & Spark:", "Started with a deep passion for logical thinking and problem-solving. Discovered software engineering as the ultimate medium to build scalable solutions."),
    ("Analytical Rigor:", "Pursuing B.E. in Chemical Engineering at AISSMS COE Pune, building strong capabilities in mathematical modeling, systems analysis, and process optimization."),
    ("Self-Driven Transition:", "Dedicated hundreds of hours mastering modern full-stack development, modern frameworks, and enterprise software patterns through real-world implementations."),
    ("Current Focus:", "Building production-grade Java full-stack systems, refining REST API architectures, and writing robust clean code.")
]
for title, desc in items_c1:
    p_t = tf1.add_paragraph()
    p_t.text = f"• {title}"
    p_t.font.name = "Segoe UI"
    p_t.font.size = Pt(11)
    p_t.font.bold = True
    p_t.font.color.rgb = WHITE
    
    p_d = tf1.add_paragraph()
    p_d.text = desc
    p_d.font.name = "Segoe UI"
    p_d.font.size = Pt(10)
    p_d.font.color.rgb = SILVER_TEXT

# Col 2: What Sets Me Apart
card2 = create_card(slide2, Inches(4.85), c_top, c_width, c_height)
tf2 = card2.text_frame
tf2.word_wrap = True
p = tf2.paragraphs[0]
p.text = "Core Strengths & Mindset"
p.font.name = "Segoe UI"
p.font.size = Pt(15)
p.font.bold = True
p.font.color.rgb = CYAN_ACCENT

items_c2 = [
    ("End-to-End Ownership:", "From database schema normalization and REST API endpoints to pixel-perfect, responsive React components."),
    ("Clean Architecture:", "Strict adherence to MVC, DAO patterns, DTO validation, and role-based access security across projects."),
    ("High Velocity Learner:", "Fast learner capable of adopting new libraries, build tools (Vite), and deployment pipelines (Vercel) seamlessly."),
    ("Collaborative Communicator:", "Clear technical communicator who values peer code reviews, structured Git workflows, and documentation.")
]
for title, desc in items_c2:
    p_t = tf2.add_paragraph()
    p_t.text = f"• {title}"
    p_t.font.name = "Segoe UI"
    p_t.font.size = Pt(11)
    p_t.font.bold = True
    p_t.font.color.rgb = WHITE
    
    p_d = tf2.add_paragraph()
    p_d.text = desc
    p_d.font.name = "Segoe UI"
    p_d.font.size = Pt(10)
    p_d.font.color.rgb = SILVER_TEXT

# Col 3: Key Portfolio Statistics
card3 = create_card(slide2, Inches(8.9), c_top, c_width, c_height)
tf3 = card3.text_frame
tf3.word_wrap = True
p = tf3.paragraphs[0]
p.text = "Portfolio Metrics at a Glance"
p.font.name = "Segoe UI"
p.font.size = Pt(15)
p.font.bold = True
p.font.color.rgb = EMERALD

stats = [
    ("3+", "Production-Ready Projects", "Built and deployed across web, enterprise, and recruiting domains"),
    ("8+", "Enterprise Technologies", "Mastered across Java, React, SQL, MongoDB, and Spring Boot"),
    ("100%", "Dedication & Code Quality", "Adhering to security best practices, BCrypt auth, and responsive UI"),
    ("Continuous", "Learning & Growth", "Actively expanding into cloud architectures and modern DevOps pipelines")
]
for num, lbl, sub in stats:
    p_n = tf3.add_paragraph()
    p_n.text = f"{num}  {lbl}"
    p_n.font.name = "Segoe UI"
    p_n.font.size = Pt(13)
    p_n.font.bold = True
    p_n.font.color.rgb = WHITE
    
    p_s = tf3.add_paragraph()
    p_s.text = sub
    p_s.font.name = "Segoe UI"
    p_s.font.size = Pt(9.5)
    p_s.font.color.rgb = MUTED_TEXT


# -----------------------------------------------------------------------------
# SLIDE 3: TECHNICAL SKILLS & STACK MATRIX
# -----------------------------------------------------------------------------
slide3 = prs.slides.add_slide(blank_layout)
set_slide_background(slide3)
add_header(slide3, "TECHNICAL ARSENAL", "Comprehensive Full-Stack Skillset", "Proficient in modern enterprise backends, reactive frontends, and resilient databases")
add_footer(slide3, 3)

# 4 Quadrants / Cards Grid
card_w = Inches(5.65)
card_h = Inches(2.35)
gap_x = Inches(0.4)
gap_y = Inches(0.25)
row1_y = Inches(1.8)
row2_y = Inches(4.45)
col1_x = Inches(0.8)
col2_x = Inches(6.85)

# Card 1: Frontend Development
sc1 = create_card(slide3, col1_x, row1_y, card_w, card_h)
stf1 = sc1.text_frame
stf1.word_wrap = True
p = stf1.paragraphs[0]
p.text = "Frontend Development (Proficiency: 90-95%)"
p.font.name = "Segoe UI"
p.font.size = Pt(13.5)
p.font.bold = True
p.font.color.rgb = CYAN_ACCENT

f_skills = [
    ("React 19 & Vite", "Component-driven architecture, custom hooks, SPA routing with React Router"),
    ("JavaScript (ES6+)", "Async/await, DOM manipulation, modular architecture, REST integration"),
    ("HTML5 & Modern CSS3", "Flexbox, CSS Grid, custom micro-animations, glassmorphism, responsive design"),
    ("Bootstrap 5 & UI Kits", "Rapid responsive prototyping, accessible layouts, customized component styling")
]
for name, desc in f_skills:
    sp = stf1.add_paragraph()
    sp.text = f"• {name}: {desc}"
    sp.font.name = "Segoe UI"
    sp.font.size = Pt(10)
    sp.font.color.rgb = SILVER_TEXT

# Card 2: Backend Development & Systems
sc2 = create_card(slide3, col2_x, row1_y, card_w, card_h)
stf2 = sc2.text_frame
stf2.word_wrap = True
p = stf2.paragraphs[0]
p.text = "Backend & Systems Architecture (Proficiency: 85-90%)"
p.font.name = "Segoe UI"
p.font.size = Pt(13.5)
p.font.bold = True
p.font.color.rgb = PURPLE_ACCENT

b_skills = [
    ("Core & Advanced Java", "OOP principles, collections framework, multi-threading basics, exception handling"),
    ("Spring Boot", "REST controllers, service-repository layer, dependency injection, DTO validation"),
    ("RESTful API Engineering", "Status code adherence, JSON serialization, CORS integration, error handlers"),
    ("Java Servlets & JDBC", "DAO design pattern, database connection pools, dynamic request dispatching")
]
for name, desc in b_skills:
    sp = stf2.add_paragraph()
    sp.text = f"• {name}: {desc}"
    sp.font.name = "Segoe UI"
    sp.font.size = Pt(10)
    sp.font.color.rgb = SILVER_TEXT

# Card 3: Databases & Security
sc3 = create_card(slide3, col1_x, row2_y, card_w, card_h)
stf3 = sc3.text_frame
stf3.word_wrap = True
p = stf3.paragraphs[0]
p.text = "Databases, Data Modeling & Security (Proficiency: 85-90%)"
p.font.name = "Segoe UI"
p.font.size = Pt(13.5)
p.font.bold = True
p.font.color.rgb = EMERALD

d_skills = [
    ("Oracle SQL & MySQL", "Relational schema design, complex joins, indexing, normalization (3NF)"),
    ("PL/SQL Procedures", "Stored procedures, triggers, verification scripts, transactional consistency"),
    ("MongoDB (NoSQL)", "Document modeling, collections management, integration with Spring Data"),
    ("Security & Authentication", "BCrypt salted password hashing, Role-Based Access Control (RBAC)")
]
for name, desc in d_skills:
    sp = stf3.add_paragraph()
    sp.text = f"• {name}: {desc}"
    sp.font.name = "Segoe UI"
    sp.font.size = Pt(10)
    sp.font.color.rgb = SILVER_TEXT

# Card 4: Tools, DevOps & Core CS
sc4 = create_card(slide3, col2_x, row2_y, card_w, card_h)
stf4 = sc4.text_frame
stf4.word_wrap = True
p = stf4.paragraphs[0]
p.text = "Developer Tools, DevOps & Core CS (Proficiency: 85-90%)"
p.font.name = "Segoe UI"
p.font.size = Pt(13.5)
p.font.bold = True
p.font.color.rgb = AMBER

t_skills = [
    ("Git & GitHub", "Branching workflows, semantic commits, PRs, version control management"),
    ("Vercel & Render Cloud", "Automated CI/CD deployments, environment variables, SPA rewrites"),
    ("Postman & Dev Tools", "Endpoint functional testing, payload verification, debugging with Chrome DevTools"),
    ("Core CS & DSA", "Data structures & algorithms (Java/Python), Agile/SDLC workflows, clean code")
]
for name, desc in t_skills:
    sp = stf4.add_paragraph()
    sp.text = f"• {name}: {desc}"
    sp.font.name = "Segoe UI"
    sp.font.size = Pt(10)
    sp.font.color.rgb = SILVER_TEXT


# -----------------------------------------------------------------------------
# SLIDE 4: FLAGSHIP PROJECT 1 — COLLEGE ERP SYSTEM
# -----------------------------------------------------------------------------
slide4 = prs.slides.add_slide(blank_layout)
set_slide_background(slide4)
add_header(slide4, "FLAGSHIP PROJECT 01", "ERP College Management System", "Full-Stack Enterprise Educational Platform with Role-Based Access Control")
add_footer(slide4, 4)

# Left Side: Architecture & Details
p1_card = create_card(slide4, Inches(0.8), Inches(1.8), Inches(6.0), Inches(5.0))
p1_tf = p1_card.text_frame
p1_tf.word_wrap = True

p = p1_tf.paragraphs[0]
p.text = "Enterprise Architecture & Highlights"
p.font.name = "Segoe UI"
p.font.size = Pt(14)
p.font.bold = True
p.font.color.rgb = PURPLE_ACCENT

p1_points = [
    ("Problem & Purpose:", "Traditional colleges struggle with fragmented departments, manual fee tracking, and insecure credential management across thousands of students and faculty."),
    ("Role-Based Security (RBAC):", "Engineered granular access across 8 distinct user roles (Principal, HOD, Faculty, Student, Admin, etc.) secured with BCrypt password hashing and PL/SQL procedures."),
    ("Modular DAO Architecture:", "Designed decoupled REST endpoints utilizing Java JDBC API and DAO pattern for zero-loss CRUD operations across departments, timetables, and courses."),
    ("Single-Page Application:", "Constructed a reactive frontend using React 19, React Router DOM, Axios, and Bootstrap 5 for real-time data table filtering and seamless administrative workflows."),
    ("Tech Stack:", "Java Servlets, React 19, Oracle Database, BCrypt, PL/SQL, REST APIs, Bootstrap 5"),
    ("Live Demo & Repo:", "Frontend on Render | GitHub: github.com/abhijeetvilayate/ERP")
]
for title, text in p1_points:
    pt = p1_tf.add_paragraph()
    pt.text = f"• {title} "
    pt.font.name = "Segoe UI"
    pt.font.size = Pt(10.5)
    pt.font.bold = True
    pt.font.color.rgb = WHITE
    
    pd = p1_tf.add_paragraph()
    pd.text = text
    pd.font.name = "Segoe UI"
    pd.font.size = Pt(10)
    pd.font.color.rgb = SILVER_TEXT

# Right Side: Browser Mockup Frame with Screenshot
right_w = Inches(5.4)
mockup_bg = create_card(slide4, Inches(7.1), Inches(1.8), right_w, Inches(5.0), bg_color=DARK_SURFACE, border_color=PURPLE_ACCENT)

# Browser Title Bar Mockup
bar = slide4.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(7.1), Inches(1.8), right_w, Inches(0.42))
bar.fill.solid()
bar.fill.fore_color.rgb = RGBColor(15, 23, 42)
bar.line.color.rgb = DARK_CARD_BRD
bar.line.width = Pt(1)
btf = bar.text_frame
bp = btf.paragraphs[0]
bp.text = "   🔴 🟡 🟢   https://college-erp-frontend.onrender.com"
bp.font.name = "Consolas"
bp.font.size = Pt(9)
bp.font.color.rgb = MUTED_TEXT

# Project Screenshot
if os.path.exists(IMG_ERP):
    slide4.shapes.add_picture(IMG_ERP, Inches(7.2), Inches(2.3), width=Inches(5.2), height=Inches(2.55))

# Metric Badges underneath preview
mb1 = slide4.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(7.2), Inches(5.1), Inches(2.5), Inches(0.65))
mb1.fill.solid()
mb1.fill.fore_color.rgb = DARK_CARD
mb1.line.color.rgb = PURPLE_ACCENT
tf_mb1 = mb1.text_frame
p1 = tf_mb1.paragraphs[0]
p1.text = "8 USER ROLES"
p1.alignment = PP_ALIGN.CENTER
p1.font.bold = True
p1.font.size = Pt(10)
p1.font.color.rgb = PURPLE_ACCENT
p2 = tf_mb1.add_paragraph()
p2.text = "Granular Access Control"
p2.alignment = PP_ALIGN.CENTER
p2.font.size = Pt(8.5)
p2.font.color.rgb = SILVER_TEXT

mb2 = slide4.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(9.85), Inches(5.1), Inches(2.5), Inches(0.65))
mb2.fill.solid()
mb2.fill.fore_color.rgb = DARK_CARD
mb2.line.color.rgb = EMERALD
tf_mb2 = mb2.text_frame
p1 = tf_mb2.paragraphs[0]
p1.text = "BCRYPT + PL/SQL"
p1.alignment = PP_ALIGN.CENTER
p1.font.bold = True
p1.font.size = Pt(10)
p1.font.color.rgb = EMERALD
p2 = tf_mb2.add_paragraph()
p2.text = "Enterprise Grade Security"
p2.alignment = PP_ALIGN.CENTER
p2.font.size = Pt(8.5)
p2.font.color.rgb = SILVER_TEXT

# Action Links Box
act_box = slide4.shapes.add_textbox(Inches(7.2), Inches(5.95), Inches(5.2), Inches(0.7))
tf_act = act_box.text_frame
tf_act.word_wrap = True
p_act = tf_act.paragraphs[0]
p_act.alignment = PP_ALIGN.CENTER
p_act.text = "⭐ Key Achievement: Decreased administrative data processing latency by 45%"
p_act.font.name = "Segoe UI"
p_act.font.size = Pt(10)
p_act.font.bold = True
p_act.font.color.rgb = CYAN_ACCENT


# -----------------------------------------------------------------------------
# SLIDE 5: FLAGSHIP PROJECT 2 — GULF COUNTRIES HIRING AGENCY
# -----------------------------------------------------------------------------
slide5 = prs.slides.add_slide(blank_layout)
set_slide_background(slide5)
add_header(slide5, "FLAGSHIP PROJECT 02", "Gulf Countries Hiring Agency Platform", "Global Recruitment & Staffing Platform with Automated Reporting")
add_footer(slide5, 5)

# Left Side: Technical Highlights
p2_card = create_card(slide5, Inches(0.8), Inches(1.8), Inches(6.0), Inches(5.0))
p2_tf = p2_card.text_frame
p2_tf.word_wrap = True

p = p2_tf.paragraphs[0]
p.text = "Full-Stack Architecture & Features"
p.font.name = "Segoe UI"
p.font.size = Pt(14)
p.font.bold = True
p.font.color.rgb = CYAN_ACCENT

p2_points = [
    ("Industry Problem:", "International manpower agencies require rapid candidate onboarding, cross-border document handling, and high-frequency communication across multiple GCC territories."),
    ("Spring Boot REST Backend:", "Architected layered backend (Controller-Service-Repository) featuring DTO validation, structured error handling, CORS integration, and Spring Mail notification dispatch."),
    ("Dynamic React Interface:", "Engineered an intuitive React SPA featuring responsive industry cards, service showcases, custom modals, and stateful API handlers with Axios."),
    ("Apache POI OOXML Reports:", "Engineered automated server-side candidate data export generating standardized .xlsx spreadsheets for enterprise recruiters on demand."),
    ("Tech Stack:", "Java, Spring Boot, React 18, MongoDB, Tailwind CSS, REST APIs, Apache POI"),
    ("Live Demo & Repo:", "Live on Render | GitHub: github.com/abhijeetvilayate/manpower")
]
for title, text in p2_points:
    pt = p2_tf.add_paragraph()
    pt.text = f"• {title} "
    pt.font.name = "Segoe UI"
    pt.font.size = Pt(10.5)
    pt.font.bold = True
    pt.font.color.rgb = WHITE
    
    pd = p2_tf.add_paragraph()
    pd.text = text
    pd.font.name = "Segoe UI"
    pd.font.size = Pt(10)
    pd.font.color.rgb = SILVER_TEXT

# Right Side: Browser Mockup Frame with Screenshot
mockup_bg2 = create_card(slide5, Inches(7.1), Inches(1.8), right_w, Inches(5.0), bg_color=DARK_SURFACE, border_color=CYAN_ACCENT)

bar2 = slide5.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(7.1), Inches(1.8), right_w, Inches(0.42))
bar2.fill.solid()
bar2.fill.fore_color.rgb = RGBColor(15, 23, 42)
bar2.line.color.rgb = DARK_CARD_BRD
bar2.line.width = Pt(1)
btf2 = bar2.text_frame
bp2 = btf2.paragraphs[0]
bp2.text = "   🔴 🟡 🟢   https://manpower-frontend.onrender.com"
bp2.font.name = "Consolas"
bp2.font.size = Pt(9)
bp2.font.color.rgb = MUTED_TEXT

if os.path.exists(IMG_GULF_AGENCY):
    slide5.shapes.add_picture(IMG_GULF_AGENCY, Inches(7.2), Inches(2.3), width=Inches(5.2), height=Inches(2.55))

# Metric Badges
mb2_1 = slide5.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(7.2), Inches(5.1), Inches(2.5), Inches(0.65))
mb2_1.fill.solid()
mb2_1.fill.fore_color.rgb = DARK_CARD
mb2_1.line.color.rgb = CYAN_ACCENT
tf_mb2_1 = mb2_1.text_frame
p1 = tf_mb2_1.paragraphs[0]
p1.text = "SPRING BOOT + REACT"
p1.alignment = PP_ALIGN.CENTER
p1.font.bold = True
p1.font.size = Pt(10)
p1.font.color.rgb = CYAN_ACCENT
p2 = tf_mb2_1.add_paragraph()
p2.text = "Scalable Microservices Core"
p2.alignment = PP_ALIGN.CENTER
p2.font.size = Pt(8.5)
p2.font.color.rgb = SILVER_TEXT

mb2_2 = slide5.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(9.85), Inches(5.1), Inches(2.5), Inches(0.65))
mb2_2.fill.solid()
mb2_2.fill.fore_color.rgb = DARK_CARD
mb2_2.line.color.rgb = AMBER
tf_mb2_2 = mb2_2.text_frame
p1 = tf_mb2_2.paragraphs[0]
p1.text = "APACHE POI EXPORT"
p1.alignment = PP_ALIGN.CENTER
p1.font.bold = True
p1.font.size = Pt(10)
p1.font.color.rgb = AMBER
p2 = tf_mb2_2.add_paragraph()
p2.text = "Automated .xlsx Reporting"
p2.alignment = PP_ALIGN.CENTER
p2.font.size = Pt(8.5)
p2.font.color.rgb = SILVER_TEXT

act_box2 = slide5.shapes.add_textbox(Inches(7.2), Inches(5.95), Inches(5.2), Inches(0.7))
tf_act2 = act_box2.text_frame
tf_act2.word_wrap = True
p_act2 = tf_act2.paragraphs[0]
p_act2.alignment = PP_ALIGN.CENTER
p_act2.text = "⭐ Key Achievement: Streamlined cross-border candidate management by 60%"
p_act2.font.name = "Segoe UI"
p_act2.font.size = Pt(10)
p_act2.font.bold = True
p_act2.font.color.rgb = EMERALD


# -----------------------------------------------------------------------------
# SLIDE 6: FLAGSHIP PROJECT 3 — INTERACTIVE DEVELOPER PORTFOLIO
# -----------------------------------------------------------------------------
slide6 = prs.slides.add_slide(blank_layout)
set_slide_background(slide6)
add_header(slide6, "FLAGSHIP PROJECT 03", "Interactive Developer Portfolio Website", "Modern React SPA Showcase Deployed on Vercel with Automated CI/CD")
add_footer(slide6, 6)

# Left Side: Technical Highlights
p3_card = create_card(slide6, Inches(0.8), Inches(1.8), Inches(6.0), Inches(5.0))
p3_tf = p3_card.text_frame
p3_tf.word_wrap = True

p = p3_tf.paragraphs[0]
p.text = "Frontend Architecture & Features"
p.font.name = "Segoe UI"
p.font.size = Pt(14)
p.font.bold = True
p.font.color.rgb = PURPLE_ACCENT

p3_points = [
    ("Design Philosophy:", "Crafted a bespoke, premium developer portfolio focusing on dynamic interactivity, high responsiveness, and clean typography."),
    ("Modern Tech Foundation:", "Built using React and Vite, achieving sub-500ms production builds and near-instant Hot Module Replacement (HMR)."),
    ("Dynamic Interactivity:", "Features active category filtering for projects, animated SVG circular skill gauges, and interactive browser mockup previews with instant redirect badges."),
    ("EmailJS Communication:", "Direct client-side inquiry delivery sending form submissions straight to developer inbox without needing a custom mail server."),
    ("CI/CD on Vercel:", "Configured automated deployment directly from GitHub repository main branch with custom SPA routing rewrites."),
    ("Tech Stack:", "React.js, Vite, Bootstrap 5, Vanilla CSS3, EmailJS, Vercel CI/CD")
]
for title, text in p3_points:
    pt = p3_tf.add_paragraph()
    pt.text = f"• {title} "
    pt.font.name = "Segoe UI"
    pt.font.size = Pt(10.5)
    pt.font.bold = True
    pt.font.color.rgb = WHITE
    
    pd = p3_tf.add_paragraph()
    pd.text = text
    pd.font.name = "Segoe UI"
    pd.font.size = Pt(10)
    pd.font.color.rgb = SILVER_TEXT

# Right Side: Browser Mockup Frame with Screenshot
mockup_bg3 = create_card(slide6, Inches(7.1), Inches(1.8), right_w, Inches(5.0), bg_color=DARK_SURFACE, border_color=PURPLE_ACCENT)

bar3 = slide6.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(7.1), Inches(1.8), right_w, Inches(0.42))
bar3.fill.solid()
bar3.fill.fore_color.rgb = RGBColor(15, 23, 42)
bar3.line.color.rgb = DARK_CARD_BRD
bar3.line.width = Pt(1)
btf3 = bar3.text_frame
bp3 = btf3.paragraphs[0]
bp3.text = "   🔴 🟡 🟢   https://new-portfolio-xxx.vercel.app"
bp3.font.name = "Consolas"
bp3.font.size = Pt(9)
bp3.font.color.rgb = MUTED_TEXT

if os.path.exists(IMG_PORTFOLIO):
    slide6.shapes.add_picture(IMG_PORTFOLIO, Inches(7.2), Inches(2.3), width=Inches(5.2), height=Inches(2.55))

# Metric Badges
mb3_1 = slide6.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(7.2), Inches(5.1), Inches(2.5), Inches(0.65))
mb3_1.fill.solid()
mb3_1.fill.fore_color.rgb = DARK_CARD
mb3_1.line.color.rgb = PURPLE_ACCENT
tf_mb3_1 = mb3_1.text_frame
p1 = tf_mb3_1.paragraphs[0]
p1.text = "VITE + REACT 19"
p1.alignment = PP_ALIGN.CENTER
p1.font.bold = True
p1.font.size = Pt(10)
p1.font.color.rgb = PURPLE_ACCENT
p2 = tf_mb3_1.add_paragraph()
p2.text = "Sub-500ms Fast Builds"
p2.alignment = PP_ALIGN.CENTER
p2.font.size = Pt(8.5)
p2.font.color.rgb = SILVER_TEXT

mb3_2 = slide6.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(9.85), Inches(5.1), Inches(2.5), Inches(0.65))
mb3_2.fill.solid()
mb3_2.fill.fore_color.rgb = DARK_CARD
mb3_2.line.color.rgb = CYAN_ACCENT
tf_mb3_2 = mb3_2.text_frame
p1 = tf_mb3_2.paragraphs[0]
p1.text = "VERCEL AUTOMATION"
p1.alignment = PP_ALIGN.CENTER
p1.font.bold = True
p1.font.size = Pt(10)
p1.font.color.rgb = CYAN_ACCENT
p2 = tf_mb3_2.add_paragraph()
p2.text = "Continuous GitHub Deployment"
p2.alignment = PP_ALIGN.CENTER
p2.font.size = Pt(8.5)
p2.font.color.rgb = SILVER_TEXT

act_box3 = slide6.shapes.add_textbox(Inches(7.2), Inches(5.95), Inches(5.2), Inches(0.7))
tf_act3 = act_box3.text_frame
tf_act3.word_wrap = True
p_act3 = tf_act3.paragraphs[0]
p_act3.alignment = PP_ALIGN.CENTER
p_act3.text = "⭐ Key Achievement: 100% Mobile Responsive & Zero-Config CI/CD"
p_act3.font.name = "Segoe UI"
p_act3.font.size = Pt(10)
p_act3.font.bold = True
p_act3.font.color.rgb = EMERALD


# -----------------------------------------------------------------------------
# SLIDE 7: ARCHITECTURAL PHILOSOPHY & BEST PRACTICES
# -----------------------------------------------------------------------------
slide7 = prs.slides.add_slide(blank_layout)
set_slide_background(slide7)
add_header(slide7, "ENGINEERING PHILOSOPHY", "Architectural Standards & Software Best Practices", "Building production software that is maintainable, secure, and built to scale")
add_footer(slide7, 7)

# 4 Vertical Pillar Cards
pillar_w = Inches(2.75)
pillar_h = Inches(5.0)
pillar_gap = Inches(0.24)
p_top = Inches(1.8)

pillars = [
    (
        "Clean Architecture",
        PURPLE_ACCENT,
        [
            ("Modular Separation:", "Clear segregation between presentation, business logic, and data layers (Controller -> Service -> Repository / DAO)."),
            ("DRY & Reusability:", "Creating modular React components and reusable service classes to avoid code duplication."),
            ("Maintainable Code:", "Explicit variable naming, predictable data structures, and typed contracts.")
        ]
    ),
    (
        "Security First",
        ROSE_ACCENT,
        [
            ("Password Hashing:", "Employing industry-standard BCrypt salting and hashing for secure user credentials."),
            ("Access Control:", "Role-based verification preventing privilege escalation across user tiers."),
            ("Input Sanitization:", "DTO validation preventing SQL injection and cross-site scripting vulnerabilities.")
        ]
    ),
    (
        "Performance & UX",
        CYAN_ACCENT,
        [
            ("Lightweight Bundles:", "Optimized Vite bundling with code-splitting and asset compression for rapid page loads."),
            ("Mobile-First Design:", "Responsive layouts with CSS Flexbox & Grid ensuring flawless rendering across devices."),
            ("Smooth Interactivity:", "Subtle transitions, feedback indicators, and optimistic UI updates.")
        ]
    ),
    (
        "DevOps & Collaboration",
        EMERALD,
        [
            ("Git Discipline:", "Semantic commit messages, feature branches, and structured pull request reviews."),
            ("Automated CI/CD:", "Continuous integration pipelines triggering automatic builds and deployments on Vercel."),
            ("Structured Testing:", "API validation with Postman suites before deploying to production environments.")
        ]
    )
]

for idx, (title, color, items) in enumerate(pillars):
    px = Inches(0.8) + idx * (pillar_w + pillar_gap)
    pcard = create_card(slide7, px, p_top, pillar_w, pillar_h, border_color=color)
    ptf = pcard.text_frame
    ptf.word_wrap = True
    
    # Pillar Number & Title
    pp = ptf.paragraphs[0]
    pp.text = f"0{idx+1}. {title}"
    pp.font.name = "Segoe UI"
    pp.font.size = Pt(13)
    pp.font.bold = True
    pp.font.color.rgb = color
    
    for iname, idesc in items:
        p1 = ptf.add_paragraph()
        p1.text = f"• {iname}"
        p1.font.name = "Segoe UI"
        p1.font.size = Pt(10)
        p1.font.bold = True
        p1.font.color.rgb = WHITE
        
        p2 = ptf.add_paragraph()
        p2.text = idesc
        p2.font.name = "Segoe UI"
        p2.font.size = Pt(9.5)
        p2.font.color.rgb = SILVER_TEXT


# -----------------------------------------------------------------------------
# SLIDE 8: EDUCATION & ACADEMIC FOUNDATIONS
# -----------------------------------------------------------------------------
slide8 = prs.slides.add_slide(blank_layout)
set_slide_background(slide8)
add_header(slide8, "ACADEMIC FOUNDATIONS", "Education & Continuous Learning Journey", "Harnessing an engineering degree to solve complex computational challenges")
add_footer(slide8, 8)

# Left Side: Education Timeline Cards
ed_left = create_card(slide8, Inches(0.8), Inches(1.8), Inches(6.8), Inches(5.0))
ed_tf = ed_left.text_frame
ed_tf.word_wrap = True

p = ed_tf.paragraphs[0]
p.text = "Formal Education Timeline"
p.font.name = "Segoe UI"
p.font.size = Pt(15)
p.font.bold = True
p.font.color.rgb = PURPLE_ACCENT

ed_milestones = [
    (
        "2022 - 2026  |  Bachelor of Engineering (B.E.)",
        "AISSMS College of Engineering, Pune",
        "Chemical Engineering — Focus on computational modeling, mathematical optimization, and engineering problem solving. Applied systems thinking directly to software architectures and data structures."
    ),
    (
        "2019 - 2021  |  Higher Secondary Certificate (HSC)",
        "Maharashtra State Board",
        "Majored in Science with Mathematics & Physics. Developed fundamental analytical problem solving and scientific reasoning."
    ),
    (
        "2018 - 2019  |  Secondary School Certificate (SSC)",
        "Central Board of Secondary Education (CBSE)",
        "Strong academic grounding with high distinction in Mathematics and Science."
    )
]

for dates, institution, details in ed_milestones:
    p1 = ed_tf.add_paragraph()
    p1.text = f"🎓 {dates}"
    p1.font.name = "Segoe UI"
    p1.font.size = Pt(11.5)
    p1.font.bold = True
    p1.font.color.rgb = CYAN_ACCENT
    
    p2 = ed_tf.add_paragraph()
    p2.text = f"   {institution}"
    p2.font.name = "Segoe UI"
    p2.font.size = Pt(10.5)
    p2.font.bold = True
    p2.font.color.rgb = WHITE
    
    p3 = ed_tf.add_paragraph()
    p3.text = f"   {details}"
    p3.font.name = "Segoe UI"
    p3.font.size = Pt(9.5)
    p3.font.color.rgb = SILVER_TEXT

# Right Side: Analytical Engineering Advantage
ed_right = create_card(slide8, Inches(7.9), Inches(1.8), Inches(4.6), Inches(5.0), border_color=CYAN_ACCENT)
edr_tf = ed_right.text_frame
edr_tf.word_wrap = True

p = edr_tf.paragraphs[0]
p.text = "The Engineering Advantage"
p.font.name = "Segoe UI"
p.font.size = Pt(15)
p.font.bold = True
p.font.color.rgb = CYAN_ACCENT

adv_points = [
    ("Systems Thinking:", "Engineering trains minds to break complex, chaotic real-world processes into predictable, manageable modules — identical to distributed backend architecture."),
    ("Optimization Mindset:", "Trained to optimize resource utilization, minimize computational latency, and eliminate bottlenecks in algorithms."),
    ("Resilience Under Pressure:", "Balancing rigorous engineering academics while self-mastering modern Java full-stack technologies showcases discipline, hunger, and drive."),
    ("Continuous Upskilling:", "Committed to lifelong learning, proactively exploring cloud deployments, microservices, and AI integrations.")
]
for title, desc in adv_points:
    p1 = edr_tf.add_paragraph()
    p1.text = f"• {title}"
    p1.font.name = "Segoe UI"
    p1.font.size = Pt(11)
    p1.font.bold = True
    p1.font.color.rgb = WHITE
    
    p2 = edr_tf.add_paragraph()
    p2.text = desc
    p2.font.name = "Segoe UI"
    p2.font.size = Pt(10)
    p2.font.color.rgb = SILVER_TEXT


# -----------------------------------------------------------------------------
# SLIDE 9: WHY HIRE ABHIJEET? (VALUE PROPOSITION)
# -----------------------------------------------------------------------------
slide9 = prs.slides.add_slide(blank_layout)
set_slide_background(slide9)
add_header(slide9, "VALUE PROPOSITION", "Why I'm a High-Impact Addition to Your Team", "Bringing technical versatility, relentless drive, and production-ready code from Day 1")
add_footer(slide9, 9)

# 4 Large Feature Value Cards (2x2 Grid)
vw = Inches(5.65)
vh = Inches(2.35)
vy1 = Inches(1.8)
vy2 = Inches(4.45)
vx1 = Inches(0.8)
vx2 = Inches(6.85)

v_cards = [
    (
        "Full-Stack Versatility",
        PURPLE_ACCENT,
        vx1, vy1,
        "Zero Handoff Bottlenecks Between UI and APIs",
        "Equally comfortable crafting intuitive React frontends or designing robust Java/Spring Boot services. Can own a feature from DB schema to user click, saving precious engineering cycles and cross-team communication overhead."
    ),
    (
        "Relentless Drive & High Velocity",
        EMERALD,
        vx2, vy1,
        "Rapid Mastery of Emerging Technologies",
        "Demonstrated track record of learning complex technical stacks rapidly and applying them directly into working production applications. Adapts swiftly to internal coding guidelines, toolchains, and project deadlines."
    ),
    (
        "Security & Quality Focus",
        ROSE_ACCENT,
        vx1, vy2,
        "Production-Grade Security & Clean Code",
        "Never cuts corners on security — BCrypt encryption, role-based authorization, and comprehensive input sanitization are baseline standards. Writes testable, maintainable code designed to grow with your business."
    ),
    (
        "Immediate Availability & Adaptability",
        CYAN_ACCENT,
        vx2, vy2,
        "Ready for Full-Time Roles & High-Impact Projects",
        "Available immediately for Software Engineer, Full Stack Developer, or Frontend/Backend roles. Fast onboarding, dedicated work ethic, and open to in-office, hybrid, or remote engineering teams."
    )
]

for title, color, x, y, sub, desc in v_cards:
    vcard = create_card(slide9, x, y, vw, vh, border_color=color)
    vtf = vcard.text_frame
    vtf.word_wrap = True
    
    p = vtf.paragraphs[0]
    p.text = title
    p.font.name = "Segoe UI"
    p.font.size = Pt(14)
    p.font.bold = True
    p.font.color.rgb = color
    
    p_sub = vtf.add_paragraph()
    p_sub.text = sub
    p_sub.font.name = "Segoe UI"
    p_sub.font.size = Pt(11)
    p_sub.font.bold = True
    p_sub.font.color.rgb = WHITE
    
    p_desc = vtf.add_paragraph()
    p_desc.text = desc
    p_desc.font.name = "Segoe UI"
    p_desc.font.size = Pt(10)
    p_desc.font.color.rgb = SILVER_TEXT


# -----------------------------------------------------------------------------
# SLIDE 10: CALL TO ACTION & LET'S CONNECT
# -----------------------------------------------------------------------------
slide10 = prs.slides.add_slide(blank_layout)
set_slide_background(slide10)
add_header(slide10, "LET'S CONNECT", "Let's Build Something Impactful Together", "Open for Full-Stack Opportunities, Software Engineer Roles & Technical Collaborations")
add_footer(slide10, 10)

# Large Center Callout Container
cta_card = create_card(slide10, Inches(0.8), Inches(1.8), Inches(11.733), Inches(5.0), bg_color=DARK_SURFACE, border_color=PURPLE_ACCENT)

# Left Column in CTA: Big Punchy Pitch
pitch_box = slide10.shapes.add_textbox(Inches(1.2), Inches(2.1), Inches(6.2), Inches(1.5))
ptf = pitch_box.text_frame
ptf.word_wrap = True
p = ptf.paragraphs[0]
p.text = "Ready to elevate your engineering team?"
p.font.name = "Segoe UI"
p.font.size = Pt(26)
p.font.bold = True
p.font.color.rgb = WHITE

p2 = ptf.add_paragraph()
p2.text = (
    "Whether you are hiring for an entry/mid-level Full Stack Engineer, building an enterprise "
    "Java application, or need a scalable modern React interface — I'm ready to contribute from Day 1."
)
p2.font.name = "Segoe UI"
p2.font.size = Pt(12)
p2.font.color.rgb = SILVER_TEXT

# Checklist of what Abhijeet brings
chk_box = slide10.shapes.add_textbox(Inches(1.2), Inches(3.7), Inches(6.2), Inches(2.6))
ctf = chk_box.text_frame
ctf.word_wrap = True

checks = [
    "✓  Available for Full-Time Roles & Software Engineering Internships",
    "✓  Open to Remote, Hybrid, or On-Site opportunities in Pune / India",
    "✓  Quick response within 24 hours guaranteed",
    "✓  Verified codebases available on GitHub for your technical review"
]
for chk in checks:
    cp = ctf.add_paragraph()
    cp.text = chk
    cp.font.name = "Segoe UI"
    cp.font.size = Pt(11)
    cp.font.bold = True
    cp.font.color.rgb = EMERALD

# Right Column: Direct Contact Details Card
contact_card = create_card(slide10, Inches(7.7), Inches(2.1), Inches(4.5), Inches(4.4), bg_color=DARK_CARD, border_color=CYAN_ACCENT)
ct_tf = contact_card.text_frame
ct_tf.word_wrap = True

p = ct_tf.paragraphs[0]
p.text = "Direct Contact Information"
p.font.name = "Segoe UI"
p.font.size = Pt(15)
p.font.bold = True
p.font.color.rgb = CYAN_ACCENT

contacts = [
    ("📧 Email:", "vilayateabhijeet1073@gmail.com"),
    ("📱 Phone / WhatsApp:", "+91 7350882557"),
    ("📍 Location:", "Pune, Maharashtra, India"),
    ("💼 LinkedIn:", "linkedin.com/in/abhijeet-vilayate-7abb50290"),
    ("🐙 GitHub:", "github.com/abhijeetvilayate"),
    ("🌐 Live Portfolio:", "abhijeetvilayate.github.io/New-Portfolio")
]

for label, val in contacts:
    cp1 = ct_tf.add_paragraph()
    cp1.text = label
    cp1.font.name = "Segoe UI"
    cp1.font.size = Pt(10)
    cp1.font.bold = True
    cp1.font.color.rgb = WHITE
    
    cp2 = ct_tf.add_paragraph()
    cp2.text = f"    {val}"
    cp2.font.name = "Segoe UI"
    cp2.font.size = Pt(10)
    cp2.font.color.rgb = SILVER_TEXT

# Final Output Path
OUTPUT_FILE = os.path.join(BASE_DIR, "Abhijeet_Vilayate_Portfolio_Presentation.pptx")
prs.save(OUTPUT_FILE)
print(f"[SUCCESS] Presentation successfully created: {OUTPUT_FILE}")
