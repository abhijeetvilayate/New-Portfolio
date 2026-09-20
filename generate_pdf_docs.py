import os
import sys
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, KeepTogether, HRFlowable
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.pdfgen import canvas

class NumberedCanvas(canvas.Canvas):
    """
    Two-pass canvas to add headers and footers with total page counts.
    """
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self._saved_page_states = []

    def showPage(self):
        self._saved_page_states.append(dict(self.__dict__))
        self._startPage()

    def save(self):
        num_pages = len(self._saved_page_states)
        for state in self._saved_page_states:
            self.__dict__.update(state)
            self.draw_page_decorations(num_pages)
            super().showPage()
        super().save()

    def draw_page_decorations(self, page_count):
        self.saveState()
        
        # Color definitions
        purple_color = colors.HexColor("#6f42c1")
        gray_text = colors.HexColor("#6c757d")
        divider_line = colors.HexColor("#e0e0e0")

        # Running Header (pages > 1)
        if self._pageNumber > 1:
            self.setFont("Helvetica-Bold", 8)
            self.setFillColor(purple_color)
            self.drawString(36, 756, "ABHIJEET VILAYATE PORTFOLIO  |  PROJECT OVERVIEW & FILE DETAILS")
            
            self.setFont("Helvetica", 8)
            self.setFillColor(gray_text)
            self.drawRightString(576, 756, "React 19 + Vite Codebase")
            
            self.setStrokeColor(divider_line)
            self.setLineWidth(0.75)
            self.line(36, 748, 576, 748)

        # Running Footer (all pages)
        self.setStrokeColor(divider_line)
        self.setLineWidth(0.75)
        self.line(36, 45, 576, 45)

        self.setFont("Helvetica", 8)
        self.setFillColor(gray_text)
        self.drawString(36, 32, "Developer Portfolio Project Documentation  |  Created for Abhijeet Vilayate")
        
        page_str = f"Page {self._pageNumber} of {page_count}"
        self.drawRightString(576, 32, page_str)
        
        self.restoreState()

def build_pdf(filename="Portfolio_Project_Overview_And_File_Details.pdf"):
    # Page setup: Letter size (612 x 792 pt), margins: 36 pt (0.5 inch) left/right, 48 pt top/bottom
    doc = SimpleDocTemplate(
        filename,
        pagesize=letter,
        leftMargin=36,
        rightMargin=36,
        topMargin=48,
        bottomMargin=54
    )

    styles = getSampleStyleSheet()

    # Define custom styling palette
    c_primary = colors.HexColor("#5e35b1")     # Deep Purple
    c_secondary = colors.HexColor("#7952b3")   # Medium Violet
    c_accent = colors.HexColor("#00897b")      # Teal Accent
    c_dark = colors.HexColor("#1e1e2f")        # Slate Dark
    c_body = colors.HexColor("#2c3e50")        # Charcoal text
    c_bg_light = colors.HexColor("#f8f9fa")    # Soft gray background
    c_card_bg = colors.HexColor("#f3e5f5")     # Light purple tint
    c_code_bg = colors.HexColor("#272822")     # Dark code box
    c_border = colors.HexColor("#dcdfe6")      # Border gray

    # Custom Paragraph Styles
    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=22,
        leading=26,
        textColor=c_primary,
        spaceAfter=6
    )

    subtitle_style = ParagraphStyle(
        'DocSubtitle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=12,
        leading=16,
        textColor=c_secondary,
        spaceAfter=14
    )

    meta_text = ParagraphStyle(
        'MetaText',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=13,
        textColor=c_dark
    )

    meta_bold = ParagraphStyle(
        'MetaBold',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9,
        leading=13,
        textColor=c_primary
    )

    h1_style = ParagraphStyle(
        'SectionH1',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=14,
        leading=18,
        textColor=c_primary,
        spaceBefore=16,
        spaceAfter=8,
        keepWithNext=True
    )

    h2_style = ParagraphStyle(
        'SectionH2',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=11,
        leading=15,
        textColor=c_secondary,
        spaceBefore=12,
        spaceAfter=6,
        keepWithNext=True
    )

    body_style = ParagraphStyle(
        'BodyDark',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=14,
        textColor=c_body,
        spaceAfter=8
    )

    bullet_style = ParagraphStyle(
        'BulletText',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=13,
        textColor=c_body,
        leftIndent=12,
        spaceAfter=4
    )

    filename_style = ParagraphStyle(
        'FileNameStyle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10,
        leading=14,
        textColor=c_primary
    )

    filetype_tag = ParagraphStyle(
        'FileTypeTag',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8,
        leading=10,
        textColor=colors.white
    )

    file_desc = ParagraphStyle(
        'FileDesc',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=12.5,
        textColor=c_body
    )

    table_header = ParagraphStyle(
        'TableHeader',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9,
        leading=12,
        textColor=colors.white
    )

    table_cell = ParagraphStyle(
        'TableCell',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=12,
        textColor=c_body
    )

    table_cell_bold = ParagraphStyle(
        'TableCellBold',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8.5,
        leading=12,
        textColor=c_dark
    )

    story = []

    # ---------------------------------------------------------
    # HEADER / COVER TITLE SECTION
    # ---------------------------------------------------------
    story.append(Paragraph("Personal Portfolio Application", title_style))
    story.append(Paragraph("Comprehensive Project Overview & Detailed File-by-File Technical Documentation", subtitle_style))
    story.append(HRFlowable(width="100%", thickness=2, color=c_primary, spaceBefore=0, spaceAfter=12))

    # Metadata Summary Box Table
    meta_data = [
        [
            Paragraph("<b>Developer:</b> Abhijeet Vilayate", meta_text),
            Paragraph("<b>Tech Stack:</b> React 19, Vite, Bootstrap 5, EmailJS", meta_text)
        ],
        [
            Paragraph("<b>Role:</b> Full Stack Developer", meta_text),
            Paragraph("<b>Routing:</b> React Router DOM (HashRouter)", meta_text)
        ],
        [
            Paragraph("<b>Education:</b> B.E. Chemical Engineering (AISSMS COE)", meta_text),
            Paragraph("<b>Deployment Target:</b> GitHub Pages (gh-pages)", meta_text)
        ],
        [
            Paragraph("<b>Project Location:</b> <code>New-Portfolio</code>", meta_text),
            Paragraph("<b>Total Files Documented:</b> 55+ Files (Root, Public, Src, Scaffold)", meta_text)
        ]
    ]

    meta_table = Table(meta_data, colWidths=[270, 270])
    meta_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), c_card_bg),
        ('BOX', (0,0), (-1,-1), 1, c_secondary),
        ('PADDING', (0,0), (-1,-1), 6),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
    ]))
    story.append(meta_table)
    story.append(Spacer(1, 14))

    # ---------------------------------------------------------
    # 1. EXECUTIVE PROJECT OVERVIEW
    # ---------------------------------------------------------
    story.append(Paragraph("1. Executive Project Overview", h1_style))
    story.append(HRFlowable(width="100%", thickness=1, color=c_secondary, spaceBefore=0, spaceAfter=8))
    
    overview_p1 = (
        "This project represents the personal developer portfolio website for <b>Abhijeet Vilayate</b>, "
        "a passionate Full Stack Developer with expertise in modern web technologies, React.js, Java, Spring Boot, "
        "RESTful APIs, and relational databases. Built from the ground up using <b>React 19</b> and standard <b>Vite</b>, "
        "the application combines a responsive, aesthetically rich UI with component-driven architecture."
    )
    story.append(Paragraph(overview_p1, body_style))

    overview_p2 = (
        "The project is designed to deliver a seamless user experience across mobile, tablet, and desktop devices, "
        "leveraging <b>Bootstrap 5</b>, <b>Bootstrap Icons</b>, custom CSS grid/flexbox layouts, animated background shapes, "
        "SVG-based circular progress gauges, interactive filter pills, and direct email communication capabilities powered by "
        "the <b>EmailJS</b> SDK."
    )
    story.append(Paragraph(overview_p2, body_style))

    # Key Architectural Highlights
    story.append(Paragraph("Key Architectural & Design Highlights:", h2_style))
    story.append(Paragraph("• <b>Single Page Application (SPA) Routing:</b> Utilizes <code>React Router DOM</code> configured with <code>HashRouter</code> to ensure smooth client-side navigation without requiring server-side rewrite rules when hosted on static platforms like GitHub Pages.", bullet_style))
    story.append(Paragraph("• <b>Modular Component Architecture:</b> Strictly decouples application concern into shared layout components (<code>Header</code>, <code>Footer</code>, <code>StatsBanner</code>) and dynamic page views (<code>Home</code>, <code>About</code>, <code>Skills</code>, <code>Projects</code>, <code>Contact</code>).", bullet_style))
    story.append(Paragraph("• <b>Interactive Data Visualization:</b> Custom SVG circular gauges dynamically calculate <code>strokeDashoffset</code> values to render SVG progress rings for technical skills.", bullet_style))
    story.append(Paragraph("• <b>Dynamic Multi-Category Filtering:</b> Stateful pill buttons on the Projects page allow visitors to filter featured projects across Web Development, Java/JDBC, Frontend, and Full Stack categories in real-time.", bullet_style))
    story.append(Paragraph("• <b>Live Contact Form Integration:</b> Integrates <code>@emailjs/browser</code> to enable direct email dispatch from website visitors to the developer's inbox without requiring a backend web server.", bullet_style))
    story.append(Paragraph("• <b>Future-Proof Architecture (ERP Module Scaffold):</b> Includes a pre-structured scaffold directory (<code>src/src/</code>) comprising 29 sub-module files prepared for expanding the portfolio with an embedded Enterprise Resource Planning (ERP) & College Management System.", bullet_style))

    story.append(Spacer(1, 10))

    # ---------------------------------------------------------
    # 2. FILE CATEGORY SUMMARY TABLE
    # ---------------------------------------------------------
    story.append(Paragraph("2. Repository Structure & File Statistics", h1_style))
    story.append(HRFlowable(width="100%", thickness=1, color=c_secondary, spaceBefore=0, spaceAfter=8))

    cat_data = [
        [Paragraph("Directory Category", table_header), Paragraph("File Count", table_header), Paragraph("Primary Technologies & Description", table_header)],
        [Paragraph("Root Level Configuration", table_cell_bold), Paragraph("7 Files", table_cell), Paragraph("Vite config, package manifests, ESLint, HTML entry point, Git setup", table_cell)],
        [Paragraph("Public Directory (<code>public/</code>)", table_cell_bold), Paragraph("5 Files", table_cell), Paragraph("Static brand logo PNG, SVG favicons, downloadable resume PDFs", table_cell)],
        [Paragraph("Application Core (<code>src/</code>)", table_cell_bold), Paragraph("4 Files", table_cell), Paragraph("React root script (<code>main.jsx</code>), router layout (<code>App.jsx</code>), base CSS", table_cell)],
        [Paragraph("Main Shared Components (<code>src/Main/</code> & <code>src/</code>)", table_cell_bold), Paragraph("5 Files", table_cell), Paragraph("Sticky Header, Footer, StatsBanner with matching CSS modules", table_cell)],
        [Paragraph("Page Components (<code>src/Pages/</code>)", table_cell_bold), Paragraph("10 Files", table_cell), Paragraph("Home, About, Skills, Projects, Contact pages & dedicated CSS stylesheets", table_cell)],
        [Paragraph("Assets Directory (<code>src/assets/</code>)", table_cell_bold), Paragraph("9 Files", table_cell), Paragraph("Developer portrait cutouts, project screenshot assets, SVG logos, PDF resume", table_cell)],
        [Paragraph("ERP Module Scaffold (<code>src/src/</code>)", table_cell_bold), Paragraph("29 Files", table_cell), Paragraph("Scaffold architecture files for ERP/Management System (routes, context, services, views)", table_cell)],
        [Paragraph("<b>TOTAL FILE COUNT</b>", table_cell_bold), Paragraph("<b>59 Files</b>", table_cell_bold), Paragraph("<b>Complete Portfolio & Architecture Workspace</b>", table_cell_bold)]
    ]

    cat_table = Table(cat_data, colWidths=[160, 80, 300])
    cat_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), c_primary),
        ('ALIGN', (0,0), (-1,-1), 'LEFT'),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('GRID', (0,0), (-1,-1), 0.5, c_border),
        ('ROWBACKGROUNDS', (0,1), (-1,-2), [colors.white, c_bg_light]),
        ('BACKGROUND', (0,-1), (-1,-1), c_card_bg),
        ('PADDING', (0,0), (-1,-1), 5),
    ]))
    story.append(cat_table)

    story.append(Spacer(1, 14))

    # ---------------------------------------------------------
    # 3. DETAILED FILE-BY-FILE DOCUMENTATION
    # ---------------------------------------------------------
    story.append(Paragraph("3. Detailed File-by-File Technical Breakdown", h1_style))
    story.append(HRFlowable(width="100%", thickness=1, color=c_secondary, spaceBefore=0, spaceAfter=10))

    def make_file_card(filename, filetype, purpose, detailed_desc, line_count=None):
        """Helper to create a formatted documentation block for a file."""
        header_text = f"<b>{filename}</b>"
        if line_count:
            header_text += f" <font color='#6c757d'>({line_count})</font>"

        tag_bg = c_secondary
        if filetype in ["Config", "JSON"]: tag_bg = colors.HexColor("#4a148c")
        elif filetype in ["React JSX", "JavaScript"]: tag_bg = colors.HexColor("#1565c0")
        elif filetype in ["CSS Stylesheet"]: tag_bg = colors.HexColor("#0277bd")
        elif filetype in ["Asset", "PDF", "PNG"]: tag_bg = colors.HexColor("#2e7d32")
        elif filetype in ["Scaffold"]: tag_bg = colors.HexColor("#e65100")

        header_row = [
            Paragraph(f"<font color='#5e35b1' size=10><b>{filename}</b></font>", filename_style),
            Paragraph(f"<font color='white'><b>{filetype}</b></font>", ParagraphStyle('Tag', parent=filetype_tag, backColor=tag_bg, borderPadding=2, alignment=1))
        ]
        
        content = [
            Paragraph(f"<b>Primary Purpose:</b> {purpose}", ParagraphStyle('Purp', parent=file_desc, fontName='Helvetica-Bold')),
            Paragraph(detailed_desc, file_desc)
        ]

        card_table = Table([[Table([header_row], colWidths=[410, 110])], [content]], colWidths=[530])
        card_table.setStyle(TableStyle([
            ('BACKGROUND', (0,0), (-1,0), c_bg_light),
            ('BOX', (0,0), (-1,-1), 0.75, c_border),
            ('LINEBELOW', (0,0), (-1,0), 0.75, c_border),
            ('PADDING', (0,0), (-1,-1), 6),
            ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ]))
        return card_table

    # --- GROUP A: ROOT CONFIGURATION & BUILD FILES ---
    story.append(Paragraph("Group A: Root Configuration & Build Files", h2_style))

    story.append(make_file_card(
        "package.json", "JSON",
        "Project manifest containing scripts, production dependencies, and dev tooling.",
        "Defines project metadata (<code>portfolio</code>, version 0.0.0, ESM module type). "
        "Contains NPM scripts: <code>dev</code> (starts Vite server), <code>build</code> (compiles bundle), "
        "<code>lint</code> (ESLint check), <code>preview</code> (previews build), <code>predeploy</code>, and <code>deploy</code> (deploys dist folder to GitHub Pages using <code>gh-pages</code>). "
        "Lists core dependencies: <code>@emailjs/browser</code> (v4.4.1), <code>bootstrap</code> (v5.3.8), <code>bootstrap-icons</code> (v1.13.1), "
        "<code>react</code> (v19.2.7), <code>react-bootstrap</code> (v2.10.10), <code>react-dom</code> (v19.2.7), <code>react-icons</code> (v5.7.0), "
        "and <code>react-router-dom</code> (v7.18.1)."
    ))
    story.append(Spacer(1, 6))

    story.append(make_file_card(
        "vite.config.js", "JavaScript",
        "Vite bundler and development server configuration.",
        "Exports default Vite configuration utilizing <code>@vitejs/plugin-react</code> for Fast Refresh, JSX transformation, and optimized ESM bundling."
    ))
    story.append(Spacer(1, 6))

    story.append(make_file_card(
        "index.html", "HTML",
        "Main HTML template and document entry point.",
        "Defines HTML5 document metadata, sets the browser title to <i>'Abhijeet Vilayate | Full Stack Developer'</i>, "
        "links the site favicon (<code>/av-logo.png</code>), configures the mobile viewport, and provides the <code>&lt;div id='root'&gt;&lt;/div&gt;</code> mounting point for React rendering."
    ))
    story.append(Spacer(1, 6))

    story.append(make_file_card(
        "eslint.config.js", "JavaScript",
        "ESLint flat configuration file for code quality and linting.",
        "Defines code linting rules, enables React hooks and React refresh plugins, sets browser globals, and specifies linting rules across JS/JSX source files."
    ))
    story.append(Spacer(1, 6))

    story.append(make_file_card(
        "README.md", "Documentation",
        "Markdown documentation for the repository.",
        "Contains default Vite + React template notes, React compiler advice, ESLint setup instructions, and repository identifier heading."
    ))
    story.append(Spacer(1, 6))

    story.append(make_file_card(
        ".gitignore", "Config",
        "Version control exclusion rules.",
        "Specifies paths and patterns ignored by Git, including <code>node_modules/</code>, build output <code>dist/</code>, local environment files, and IDE cache folders."
    ))
    story.append(Spacer(1, 6))

    story.append(make_file_card(
        "package-lock.json", "JSON",
        "NPM dependency lockfile.",
        "Automatically generated lockfile recording exact version dependency trees, integrity hashes, and package resolutions for deterministic npm builds."
    ))

    story.append(Spacer(1, 10))

    # --- GROUP B: PUBLIC ASSETS ---
    story.append(Paragraph("Group B: Public Directory Static Assets (public/)", h2_style))

    story.append(make_file_card(
        "public/av-logo.png", "PNG",
        "Primary brand logo image asset.",
        "Personal developer logo PNG displayed in the website sticky navbar header and global footer components."
    ))
    story.append(Spacer(1, 6))

    story.append(make_file_card(
        "public/Abhijeet_Vilayate_Resume.pdf", "PDF",
        "Downloadable developer resume file.",
        "Official PDF resume document of Abhijeet Vilayate made directly available for public download via navbar and contact buttons."
    ))
    story.append(Spacer(1, 6))

    story.append(make_file_card(
        "public/resume.pdf", "PDF",
        "Alias copy of developer resume.",
        "Alternative standardized static link filename for accessing the developer's resume PDF."
    ))
    story.append(Spacer(1, 6))

    story.append(make_file_card(
        "public/favicon.svg & public/icons.svg", "SVG",
        "Browser tab icon and vector icon sprite library.",
        "High-definition SVG vector favicon file for browser address bars and tab header icons, alongside SVG icon definitions."
    ))

    story.append(Spacer(1, 10))

    # --- GROUP C: APPLICATION CORE ---
    story.append(Paragraph("Group C: Application Core Files (src/)", h2_style))

    story.append(make_file_card(
        "src/main.jsx", "React JSX",
        "React application initialization & bootstrapper script.",
        "Imports React <code>StrictMode</code>, <code>createRoot</code> from <code>react-dom/client</code>, Bootstrap CSS (<code>bootstrap.min.css</code>), "
        "Bootstrap JavaScript bundle (<code>bootstrap.bundle.min.js</code>), Bootstrap Icons CSS (<code>bootstrap-icons.css</code>), global stylesheet <code>index.css</code>, "
        "and mounts the root <code>&lt;App /&gt;</code> component into the DOM element <code>#root</code>."
    ))
    story.append(Spacer(1, 6))

    story.append(make_file_card(
        "src/App.jsx", "React JSX",
        "Main routing component establishing application structure.",
        "Configures <code>HashRouter</code> (as <code>Router</code>) for seamless static hosting compatibility. Renders the shared global <code>Header</code> component "
        "above a <code>Routes</code> container mapping 5 page views: <code>/</code> (Home), <code>/about</code> (About), <code>/skills</code> (Skills), <code>/projects</code> (Projects), and <code>/contact</code> (Contact)."
    ))
    story.append(Spacer(1, 6))

    story.append(make_file_card(
        "src/index.css & src/App.css", "CSS Stylesheet",
        "Global root stylesheets for typography, resets, and layout defaults.",
        "Provides foundational styling rules, CSS variable declarations, font family overrides, and global application container reset rules."
    ))

    story.append(Spacer(1, 10))

    # --- GROUP D: SHARED LAYOUT COMPONENTS ---
    story.append(Paragraph("Group D: Shared Layout Components (src/Main/ & src/)", h2_style))

    story.append(make_file_card(
        "src/Main/Header.jsx", "React JSX",
        "Sticky global top navigation bar component.",
        "Uses <code>useLocation()</code> from React Router to apply dynamic <code>active</code> CSS classes to navigation links. "
        "Displays the brand logo (<code>av-logo.png</code>), developer name, title, collapsing Bootstrap navbar toggler for mobile devices, and a 'Download Resume' CTA button pointing to <code>Abhijeet_Vilayate_Resume.pdf</code>."
    ))
    story.append(Spacer(1, 6))

    story.append(make_file_card(
        "src/Main/Header.css", "CSS Stylesheet",
        "Styles for sticky navbar, brand logo, and navigation buttons.",
        "Defines backdrop glassmorphism styling (<code>backdrop-filter: blur</code>), sticky positioning, link hover state indicators, purple color highlights, and responsive mobile nav drawer adjustments."
    ))
    story.append(Spacer(1, 6))

    story.append(make_file_card(
        "src/Footer.jsx", "React JSX",
        "Global website footer component.",
        "Features a 3-column layout displaying personal bio summary, brand logo, quick navigation links (Home, About, Skills, Projects, Experience, Contact), "
        "direct email link, social media icon buttons (GitHub, LinkedIn, Instagram, Twitter/X), dynamic current copyright year generator, and a smooth scroll-to-top button (<code>BsArrowUpCircleFill</code>)."
    ))
    story.append(Spacer(1, 6))

    story.append(make_file_card(
        "src/Footer.css", "CSS Stylesheet",
        "Styles for global footer layout, social icons, and top button.",
        "Configures dark theme card backgrounds, link transition hover effects, social media icon pill buttons, and responsive grid column alignment."
    ))
    story.append(Spacer(1, 6))

    story.append(make_file_card(
        "src/Main/StatsBanner.jsx", "React JSX",
        "Key performance indicators & statistics banner component.",
        "Renders a responsive 4-column metric card showcasing portfolio metrics: <b>3+ Projects Completed</b> (<code>bi-code-slash</code>), "
        "<b>4+ Technologies Used</b> (<code>bi-layers-fill</code>), <b>100% Passion & Dedication</b> (<code>bi-trophy-fill</code>), and <b>Continuous Learning Journey</b> (<code>bi-rocket-takeoff-fill</code>)."
    ))
    story.append(Spacer(1, 6))

    story.append(make_file_card(
        "src/Main/StatsBanner.css", "CSS Stylesheet",
        "Styles for stats banner container, icon circles, and metric titles.",
        "Custom styling for shadow elevations, icon background circles, bold metric numbers, and muted subtitle text."
    ))

    story.append(Spacer(1, 10))

    # --- GROUP E: DYNAMIC PAGE VIEWS ---
    story.append(Paragraph("Group E: Dynamic Page Components (src/Pages/)", h2_style))

    story.append(make_file_card(
        "src/Pages/Home.jsx", "React JSX",
        "Landing page hero view and personal overview.",
        "Renders the top hero section featuring greeting wave badge, developer title ('Abhijeet Vilayate - Full Stack Developer'), "
        "bio description, action buttons ('Hire Me' linking to <code>/contact</code>, 'View My Work' linking to <code>/projects</code>), "
        "social media profile links (GitHub, LinkedIn, Email, Twitter/X), organic background blob backdrop, developer portrait image (<code>ME.png</code>), and embedded <code>StatsBanner</code>."
    ))
    story.append(Spacer(1, 6))

    story.append(make_file_card(
        "src/Pages/Home.css", "CSS Stylesheet",
        "Home page hero styling, animated blobs, and custom button themes.",
        "Defines hero background glowing backdrop, organic image cutout shapes, purple button styling (<code>btn-purple</code>, <code>btn-outline-purple</code>), and social button hover animations."
    ))
    story.append(Spacer(1, 6))

    story.append(make_file_card(
        "src/Pages/About.jsx", "React JSX",
        "Detailed developer bio, background, education, and tech skills grid.",
        "Presents developer portrait with floating 'Open to Work' badge, 6-item personal information grid (DOB: 26 Dec 2002, Education: B.E. Chemical Eng, Email, Phone, Location: Pune, Freelance status), "
        "and 4 detailed cards: <b>My Journey</b>, <b>Education Timeline</b> (2022-2026 B.E. AISSMS COE, 2019-2021 HSC, 2018-2019 SSC), <b>What I Do</b> (Frontend, Backend, APIs, DB, Clean Code), "
        "and <b>Technologies I Love</b> (HTML5, CSS3, JS, React, Java, Spring Boot, MySQL, Git)."
    ))
    story.append(Spacer(1, 6))

    story.append(make_file_card(
        "src/Pages/About.css", "CSS Stylesheet",
        "Styles for portrait backdrop glow, timeline dot connectors, and info cards.",
        "Custom CSS for portrait glowing card backdrop, floating badge positioning, info box icons, vertical education timeline dots and connecting lines, and tech icon boxes."
    ))
    story.append(Spacer(1, 6))

    story.append(make_file_card(
        "src/Pages/Skills.jsx", "React JSX",
        "Interactive technical skills & proficiency visualization page.",
        "Renders page header, top circular SVG progress gauges calculating SVG <code>strokeDashoffset</code> rings for 7 key skills (HTML 95%, CSS 90%, JS 90%, Bootstrap 85%, React+Vite 90%, Spring Boot 85%, Python 90%), "
        "8 category cards (Frontend, Backend, Programming & ML, Database & Cloud, Tools & Platforms, Other Skills, Soft Skills, Learning & Growth), and sub-component <code>SkillBar</code> rendering animated progress bars."
    ))
    story.append(Spacer(1, 6))

    story.append(make_file_card(
        "src/Pages/Skills.css", "CSS Stylesheet",
        "Custom SVG gauge math styles, progress bars, and category icon boxes.",
        "Defines SVG circle viewBox dimensions, stroke dasharray calculations, category card icons, progress bar track backgrounds, and rounded pill bar fills."
    ))
    story.append(Spacer(1, 6))

    story.append(make_file_card(
        "src/Pages/Projects.jsx", "React JSX",
        "Filterable portfolio showcase page displaying featured software projects.",
        "Features stateful category filter pills ('All Projects', 'Web Development', 'Java / JDBC', 'Frontend', 'Full Stack') filtering 3 projects:\n"
        "1. <b>ERP College Management System:</b> Java Servlets, React 19, Oracle SQL, BCrypt, PL/SQL, RBAC across 8 roles.\n"
        "2. <b>Netflix Home Page Clone:</b> HTML5, CSS3 flexbox/grid responsive clone.\n"
        "3. <b>Personal Portfolio Website:</b> React.js, Vite, Bootstrap 5.\n"
        "Each card includes preview images, technology tags, bullet points, GitHub links, and live demo buttons."
    ))
    story.append(Spacer(1, 6))

    story.append(make_file_card(
        "src/Pages/Projects.css", "CSS Stylesheet",
        "Styles for filter pills, project cards, hover scaling, and action buttons.",
        "Category pill active states (purple background), project card hover transform effects, image preview wrapper cropping, and outline button styles."
    ))
    story.append(Spacer(1, 6))

    story.append(make_file_card(
        "src/Pages/Contact.jsx", "React JSX",
        "Interactive contact page with EmailJS integration.",
        "Integrated with <code>@emailjs/browser</code> SDK. Renders hero graphic, contact info card (Email, Phone, Location, Availability, Social Buttons), "
        "interactive contact form (Name, Email, Subject, Message) with loading spinner state dispatching emails via EmailJS (<code>service_gxqg5sa</code>, <code>template_mbm3nii</code>), "
        "4 'Why Work With Me?' cards (Quick Response, Full Stack, Modern Tech, Collaborative), CTA callout banner, and page footer."
    ))
    story.append(Spacer(1, 6))

    story.append(make_file_card(
        "src/Pages/Contact.css", "CSS Stylesheet",
        "Styles for contact hero, custom form inputs, why-cards, and CTA banner.",
        "Custom form input focus borders, purple submit button, glowing blob backgrounds, card hover transitions, gradient CTA banner, and bottom note strip."
    ))

    story.append(Spacer(1, 10))

    # --- GROUP F: ASSET FILES ---
    story.append(Paragraph("Group F: Component Image & Media Assets (src/assets/)", h2_style))

    story.append(make_file_card(
        "src/assets/ME.png", "PNG Image",
        "Developer portrait cutout photo.",
        "High quality transparent PNG cutout of developer Abhijeet Vilayate used as primary profile photo on Home and About page hero cards."
    ))
    story.append(Spacer(1, 6))

    story.append(make_file_card(
        "src/assets/Management.png", "PNG Image",
        "ERP College Management System preview image.",
        "Project showcase screenshot image displaying the dashboard UI of the ERP College Management System project."
    ))
    story.append(Spacer(1, 6))

    story.append(make_file_card(
        "src/assets/Netflix-clone.png", "PNG Image",
        "Netflix landing page clone preview image.",
        "Project showcase screenshot image displaying the Netflix clone landing page UI."
    ))
    story.append(Spacer(1, 6))

    story.append(make_file_card(
        "src/assets/New portfolio.png", "PNG Image",
        "Personal Portfolio website screenshot.",
        "Project showcase screenshot displaying the Personal Portfolio web application UI."
    ))
    story.append(Spacer(1, 6))

    story.append(make_file_card(
        "src/assets/av-logo.png & hero.png", "PNG Image",
        "Brand logo asset and hero illustration image.",
        "Primary brand icon PNG imported across React navbar/footer components, and supporting hero graphic PNG asset."
    ))
    story.append(Spacer(1, 6))

    story.append(make_file_card(
        "src/assets/react.svg & vite.svg", "SVG Image",
        "Official React and Vite framework logo graphics.",
        "Vector SVG logos rendered in 'Technologies I Love' tech stack grids."
    ))

    story.append(Spacer(1, 10))

    # --- GROUP G: ERP MODULE SCAFFOLD ---
    story.append(Paragraph("Group G: ERP / Management System Module Scaffold (src/src/)", h2_style))
    story.append(Paragraph(
        "The <code>src/src/</code> directory contains a pre-structured scaffold comprising <b>29 architectural placeholder files</b> "
        "designed for future expansion of the portfolio with an integrated Enterprise Resource Planning (ERP) & College Management System module. "
        "The scaffold includes clear architectural layering across assets, common UI components, modal dialogs, context state providers, router hooks, service APIs, and feature views.",
        body_style
    ))
    story.append(Spacer(1, 4))

    scaffold_files = [
        ("src/src/assets/index.css & theme.css", "Scaffold", "Theme and base style blueprints for the ERP dashboard module."),
        ("src/src/components/common/DataTable.jsx", "Scaffold", "Reusable data grid table component for managing student/faculty lists."),
        ("src/src/components/common/Navbar.jsx & Sidebar.jsx", "Scaffold", "Dashboard top navigation bar and side drawer navigation components."),
        ("src/src/components/common/StatCard.jsx & Footer.jsx", "Scaffold", "Dashboard summary metric cards and internal footer components."),
        ("src/src/components/modals/ApplyLeaveModal.jsx", "Scaffold", "Modal dialog form for student/employee leave requests."),
        ("src/src/components/modals/IssueBookModal.jsx", "Scaffold", "Modal dialog form for library book issuing operations."),
        ("src/src/components/modals/LogoutModal.jsx", "Scaffold", "Confirmation modal dialog for user session logout."),
        ("src/src/components/public/HeroSection.jsx, ContactForm.jsx, ServicesGrid.jsx", "Scaffold", "Public ERP portal landing components."),
        ("src/src/context/AuthContext.jsx", "Scaffold", "React Context Provider for handling ERP user authentication state."),
        ("src/src/routes/AppRoutes.jsx & ProtectedRoute.jsx", "Scaffold", "Role-Based Access Control (RBAC) route definitions and guard wrappers."),
        ("src/src/services/api.js, authService.js, attendanceService.js, feeService.js", "Scaffold", "REST API integration services for login, attendance, fees, and CRUD operations."),
        ("src/src/shared-modules/AssignmentsView.jsx, AttendanceView.jsx, FeeStatusView.jsx", "Scaffold", "Feature view modules for managing assignments, student attendance, and fee tracking."),
        ("src/src/shared-modules/LeaveRequestsView.jsx, LibraryView.jsx, NoticesView.jsx", "Scaffold", "Feature view modules for leave approvals, digital library catalog, and notice announcements."),
        ("src/src/shared-modules/ProfileView.jsx, SubjectsView.jsx, TimetableView.jsx", "Scaffold", "User profile management, course subject mapping, and class timetable schedule views.")
    ]

    for f_name, f_type, f_desc in scaffold_files:
        story.append(make_file_card(f_name, f_type, "ERP Dashboard Scaffold File", f_desc))
        story.append(Spacer(1, 4))

    story.append(Spacer(1, 10))

    # ---------------------------------------------------------
    # 4. DEPENDENCY & TOOLING REFERENCE TABLE
    # ---------------------------------------------------------
    story.append(Paragraph("4. Key NPM Dependencies & Tooling Matrix", h1_style))
    story.append(HRFlowable(width="100%", thickness=1, color=c_secondary, spaceBefore=0, spaceAfter=8))

    dep_data = [
        [Paragraph("Package Name", table_header), Paragraph("Version", table_header), Paragraph("Category", table_header), Paragraph("Functionality in Project", table_header)],
        [Paragraph("react", table_cell_bold), Paragraph("^19.2.7", table_cell), Paragraph("Core Library", table_cell), Paragraph("Core UI view library powering component rendering and hooks.", table_cell)],
        [Paragraph("react-dom", table_cell_bold), Paragraph("^19.2.7", table_cell), Paragraph("Core DOM", table_cell), Paragraph("DOM rendering package for mounting React components to index.html.", table_cell)],
        [Paragraph("react-router-dom", table_cell_bold), Paragraph("^7.18.1", table_cell), Paragraph("Routing", table_cell), Paragraph("Client-side routing engine using HashRouter for single-page navigation.", table_cell)],
        [Paragraph("bootstrap", table_cell_bold), Paragraph("^5.3.8", table_cell), Paragraph("UI Framework", table_cell), Paragraph("Responsive grid layout system, utility classes, and components.", table_cell)],
        [Paragraph("bootstrap-icons", table_cell_bold), Paragraph("^1.13.1", table_cell), Paragraph("Icon Library", table_cell), Paragraph("Font icon library for buttons, skill bars, and section headers.", table_cell)],
        [Paragraph("react-icons", table_cell_bold), Paragraph("^5.7.0", table_cell), Paragraph("Icon Components", table_cell), Paragraph("React icon components for GitHub, LinkedIn, Instagram, and Twitter X.", table_cell)],
        [Paragraph("@emailjs/browser", table_cell_bold), Paragraph("^4.4.1", table_cell), Paragraph("API SDK", table_cell), Paragraph("Client-side SDK for dispatching contact form emails directly.", table_cell)],
        [Paragraph("vite", table_cell_bold), Paragraph("^8.1.1", table_cell), Paragraph("Dev Tooling", table_cell), Paragraph("Next-gen frontend bundler and development server with HMR.", table_cell)],
        [Paragraph("gh-pages", table_cell_bold), Paragraph("^6.3.0", table_cell), Paragraph("Deployment", table_cell), Paragraph("Automation tool for publishing compiled production builds to GitHub Pages.", table_cell)]
    ]

    dep_table = Table(dep_data, colWidths=[110, 60, 90, 280])
    dep_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), c_primary),
        ('ALIGN', (0,0), (-1,-1), 'LEFT'),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('GRID', (0,0), (-1,-1), 0.5, c_border),
        ('ROWBACKGROUNDS', (0,1), (-1,-1), [colors.white, c_bg_light]),
        ('PADDING', (0,0), (-1,-1), 5),
    ]))
    story.append(dep_table)

    story.append(Spacer(1, 14))

    # ---------------------------------------------------------
    # 5. BUILD & DEPLOYMENT GUIDE
    # ---------------------------------------------------------
    story.append(Paragraph("5. Build, Execution & Deployment Guide", h1_style))
    story.append(HRFlowable(width="100%", thickness=1, color=c_secondary, spaceBefore=0, spaceAfter=8))

    cmd_p = (
        "The project includes pre-configured standard scripts in <code>package.json</code> to facilitate development, "
        "linting, testing, building, and seamless automated deployment to <b>GitHub Pages</b>."
    )
    story.append(Paragraph(cmd_p, body_style))

    story.append(Paragraph("Standard Terminal Commands:", h2_style))
    story.append(Paragraph("• <code>npm run dev</code> - Starts the local Vite development server with Hot Module Replacement (HMR).", bullet_style))
    story.append(Paragraph("• <code>npm run build</code> - Compiles and optimizes production assets into the static <code>dist/</code> directory.", bullet_style))
    story.append(Paragraph("• <code>npm run preview</code> - Starts a local web server to preview the production bundle build.", bullet_style))
    story.append(Paragraph("• <code>npm run lint</code> - Runs ESLint code analysis across all JavaScript and React JSX files.", bullet_style))
    story.append(Paragraph("• <code>npm run deploy</code> - Automatically executes <code>npm run build</code> and deploys the <code>dist/</code> directory to the <code>gh-pages</code> branch.", bullet_style))

    story.append(Spacer(1, 20))
    story.append(HRFlowable(width="100%", thickness=1, color=c_primary, spaceBefore=10, spaceAfter=10))
    story.append(Paragraph("<font color='#6f42c1'><b>Document End</b></font> — Personal Portfolio Project Overview & File Details | Abhijeet Vilayate", ParagraphStyle('EndNote', parent=styles['Normal'], fontName='Helvetica-Oblique', fontSize=9, alignment=1, textColor=c_secondary)))

    # Build document canvas
    doc.build(story, canvasmaker=NumberedCanvas)
    print(f"Successfully generated PDF: {filename}")

if __name__ == "__main__":
    build_pdf()
