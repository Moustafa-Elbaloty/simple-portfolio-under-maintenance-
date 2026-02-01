# Portfolio App 

A modern, full-stack portfolio website, featuring both a public portfolio and an admin dashboard.

## 🚀 Features

### Public Portfolio
- **Responsive Design**: Beautiful, mobile-first portfolio design
- **Multi-language Support**: Arabic and English language support
- **Dark/Light Theme**: Theme switching 
- **Interactive Sections**: 
  - Hero section with animated text
  - About section with flip cards
  - Skills showcase
  - Projects gallery with filtering
  - Achievements timeline
  - Contact form

### Admin Dashboard
- **Project Management**: Create, edit, and manage portfolio projects
- **Contact Management**: View and respond to contact form submissions
- **Skills Management**: Add and organize technical skills
- **Logo Management**: Upload and manage custom logos with automatic compression
- **Analytics**: Track portfolio performance and engagement

### API & Backend
- **RESTful API**: Complete API for managing portfolio data
- **Database Integration**: PostgreSQL with Prisma ORM
- **Authentication**: Secure admin authentication
- **File Upload**: Image upload and management with automatic compression
- **Logo System**: Dynamic logo management with fallback support
- **Embeddable Widget**: Standalone portfolio card for embedding in other sites

### 🎴 Embeddable Portfolio Card
- **Multi-language**: Support for Arabic and English
- **Customizable Colors**: Dynamic primary color theming
- **Responsive Design**: Works perfectly on any website
- **Easy Integration**: Simple iframe embed with URL parameters


## 📁 Project Structure

```
portfolio-app/
├── src/
│   ├── app/                         
│   │   ├── (public)/               
│   │   ├── (dashboard)/             
│   │   ├── api/                   
│   │   └── layout.tsx
│   ├── components/             
│   │   ├── ui/                     
│   │   ├── portfolio/               
│   │   └── dashboard/             
│   ├── lib/                       
│   ├── services/                   
│   │   ├── backend/                  
│   │   └── frontend/                
│   ├── hooks/                       
│   └── styles/                      
├── prisma/                         
├── public/                          
└── package.json
```

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ 
- PostgreSQL database
- npm 



## 📊 Database Schema

The project includes models for:
- **Users**: Admin authentication and profiles
- **Projects**: Portfolio projects with metadata
- **Skills**: Technical skills with proficiency levels
- **Achievements**: Professional achievements and milestones
- **Contacts**: Contact form submissions
- **AboutCards**: About section Q&A cards

## 🔌 API Endpoints

### Projects API
- `GET /api/projects` - Get all projects
- `POST /api/projects` - Create new project
- `PUT /api/projects/[id]` - Update project
- `DELETE /api/projects/[id]` - Delete project

### Contact API
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get contact messages (admin)

### Skills API
- `GET /api/skills` - Get all skills
- `POST /api/skills` - Create new skill



### Features

- ✅ **Responsive Design**: Works on all devices
- ✅ **Multi-language**: Arabic (RTL) and English (LTR) support  
- ✅ **Customizable**: Dynamic colors and theming
- ✅ **Fast Loading**: Optimized for performance
- ✅ **Secure**: Isolated from main application
- ✅ **SEO Friendly**: Proper meta tags and structure

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub repository
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms
The app can be deployed to any platform that supports Next.js.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📝 License

This project is licensed under the MIT License.

---

Built with ❤️ using Next.js and modern web technologies.
