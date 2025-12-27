# CipherSQLStudio - SQL Learning Platform

A browser-based SQL learning platform where students can practice SQL queries against pre-configured assignments with real-time execution and intelligent hints.

## 🎯 **Project Overview**

CipherSQLStudio is a comprehensive web application designed to help students master SQL through hands-on practice. The platform provides a safe, interactive environment where learners can:

- **Practice SQL queries** against realistic datasets
- **Get intelligent hints** from AI-powered assistance (not complete solutions)
- **See real-time results** with formatted output and execution metrics
- **Progress through difficulty levels** from beginner to advanced
- **Learn safely** with built-in security measures preventing dangerous operations

## ✨ **Features**

### Core Features (90%)
- **Assignment Listing Page**: Browse available SQL challenges with difficulty indicators
- **Interactive SQL Editor**: Monaco Editor with syntax highlighting and shortcuts
- **Real-time Query Execution**: Execute queries against PostgreSQL with instant results
- **Sample Data Viewer**: Explore table schemas and sample data before writing queries
- **AI-Powered Hints**: Get contextual guidance without revealing complete solutions
- **Responsive Design**: Mobile-first approach supporting all device sizes

### Security Features
- **SQL Injection Prevention**: Comprehensive query validation and sanitization
- **Dangerous Operation Blocking**: Prevents DROP, DELETE, INSERT, and other risky commands
- **Rate Limiting**: API protection against abuse
- **Input Validation**: Server-side validation for all user inputs

### Educational Features
- **Progressive Difficulty**: Beginner, Intermediate, and Advanced assignments
- **Contextual Learning**: Hints adapt to assignment difficulty and user progress
- **Immediate Feedback**: Real-time error messages and success indicators
- **Sample Data Integration**: Clear table schemas with realistic sample data

## 🏗️ **Technology Stack**

### Frontend
- **React.js 18.2.0** - Modern functional components with hooks
- **Vanilla SCSS** - Mobile-first responsive design with BEM methodology
- **Monaco Editor** - Professional code editor with SQL syntax highlighting
- **Axios** - HTTP client for API communication

### Backend
- **Node.js / Express.js** - RESTful API server with comprehensive middleware
- **PostgreSQL** - Sandbox database for query execution (mock implementation)
- **MongoDB** - Persistence layer for assignments and user data
- **OpenAI API** - Intelligent hint generation

### Development Tools
- **SCSS Architecture** - Variables, mixins, nesting, and partials
- **ESLint** - Code quality and consistency
- **Responsive Breakpoints** - 320px, 641px, 1024px, 1281px

## 📁 **Project Structure**

```
ciphersqlstudio/
├── client/                 # React frontend application
│   ├── src/
│   │   ├── components/     # Reusable React components
│   │   ├── styles/         # SCSS files with BEM methodology
│   │   ├── services/       # API integration services
│   │   └── utils/          # Utility functions
│   ├── public/             # Static assets
│   └── package.json        # Frontend dependencies
├── server/                 # Express backend application
│   ├── routes/             # API route handlers
│   ├── models/             # MongoDB data models
│   ├── utils/              # Server utilities and validation
│   ├── config/             # Database and service configurations
│   ├── scripts/            # Database setup and migration scripts
│   └── package.json        # Backend dependencies
├── docs/                   # Project documentation
│   ├── data-flow-diagram.md # Hand-drawn system flow diagram
│   └── demo-guide.md       # Demonstration guide
├── .env.example           # Environment variables template
├── README.md              # This file
└── package.json           # Root project configuration
```

## 🚀 **Quick Start**

### Prerequisites
- **Node.js** (v16 or higher)
- **PostgreSQL** (for production database)
- **MongoDB Atlas** account (for persistence)
- **OpenAI API Key** (for hint generation)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ciphersqlstudio
   ```

2. **Install dependencies**
   ```bash
   npm run install-all
   ```

3. **Set up environment variables**
   
   **Server Environment** (`server/.env`):
   ```env
   PORT=5000
   NODE_ENV=development
   
   # MongoDB Atlas
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/ciphersqlstudio
   
   # PostgreSQL Sandbox Database
   POSTGRES_HOST=localhost
   POSTGRES_PORT=5432
   POSTGRES_DB=ciphersqlstudio_sandbox
   POSTGRES_USER=your_postgres_user
   POSTGRES_PASSWORD=your_postgres_password
   
   # OpenAI API
   OPENAI_API_KEY=your_openai_api_key
   
   # JWT Secret
   JWT_SECRET=your_super_secret_jwt_key
   ```
   
   **Client Environment** (`client/.env`):
   ```env
   REACT_APP_API_URL=http://localhost:5000/api
   ```

4. **Initialize the database** (optional - mock data works without this)
   ```bash
   cd server
   npm run setup-db
   ```

5. **Start the development servers**
   ```bash
   npm run dev
   ```

### Access the Application
- **Frontend**: http://localhost:3000 (or 3001 if 3000 is occupied)
- **Backend API**: http://localhost:5000/api

## 🧪 **Testing**

### Automated Testing
```bash
# Test full functionality
node test-functionality.js

# Verify full-stack integration
node verify-full-stack.js
```

### Manual Testing
1. **Assignment Listing**: Browse available assignments with search and filtering
2. **Query Execution**: Write and execute SQL queries with real-time results
3. **Hint System**: Request contextual hints for learning assistance
4. **Mobile Responsiveness**: Test on various device sizes
5. **Error Handling**: Try invalid queries to test security measures

## 📊 **Data Flow**

The application follows this flow when executing queries:

1. **User Input** → SQL query entered in Monaco Editor
2. **Frontend Validation** → Basic query validation
3. **API Request** → POST to `/api/queries/execute`
4. **Backend Validation** → Security checks and sanitization
5. **Query Execution** → Safe execution against PostgreSQL
6. **Result Processing** → Format results and metadata
7. **Database Logging** → Log attempt to MongoDB
8. **API Response** → Return results or error messages
9. **UI Update** → Display results in formatted table
10. **User Feedback** → Show execution time and row counts

*Detailed hand-drawn diagram available in `docs/data-flow-diagram.md`*

## 🎨 **Design Philosophy**

### Mobile-First Approach
- **320px**: Mobile phones (portrait)
- **641px**: Small tablets and large phones
- **1024px**: Tablets and small laptops
- **1281px**: Desktop and large screens

### SCSS Architecture
- **Variables**: Consistent colors, spacing, and typography
- **Mixins**: Reusable responsive breakpoints and component styles
- **Nesting**: Logical component hierarchy
- **Partials**: Modular stylesheet organization
- **BEM Methodology**: Clear, maintainable CSS class naming

### User Experience
- **Intuitive Navigation**: Clear visual hierarchy and smooth transitions
- **Immediate Feedback**: Real-time query results and error messages
- **Progressive Learning**: Difficulty-based assignment progression
- **Accessibility**: Keyboard navigation and screen reader support

## 🔒 **Security Measures**

### Query Security
- **SQL Injection Prevention**: Comprehensive input sanitization
- **Dangerous Operation Blocking**: Prevents destructive SQL commands
- **Query Validation**: Server-side validation of all SQL queries
- **Timeout Protection**: Prevents long-running queries

### API Security
- **Rate Limiting**: Prevents API abuse
- **CORS Configuration**: Controlled cross-origin access
- **Input Validation**: Express-validator middleware
- **Error Handling**: Secure error messages without sensitive data exposure

## 🎓 **Educational Value**

### Learning Progression
1. **Beginner**: Basic SELECT queries and WHERE clauses
2. **Intermediate**: JOINs, subqueries, and aggregate functions
3. **Advanced**: Complex queries, window functions, and optimization

### Intelligent Assistance
- **Context-Aware Hints**: AI analyzes assignment difficulty and user progress
- **Educational Guidance**: Hints guide thinking without revealing solutions
- **Error-Specific Help**: Targeted assistance based on query errors
- **Fallback System**: General hints when AI is unavailable

## 🚀 **Deployment**

### Production Checklist
- [ ] Set up MongoDB Atlas cluster
- [ ] Configure PostgreSQL production database
- [ ] Obtain OpenAI API key
- [ ] Set production environment variables
- [ ] Build frontend for production (`npm run build`)
- [ ] Deploy to cloud platform (Vercel, Heroku, AWS, etc.)

### Environment Variables
All required environment variables are documented in `.env.example` files in both `server/` and `client/` directories.

## 🤝 **Contributing**

This project demonstrates enterprise-level development practices:
- **Clean Architecture**: Separation of concerns and modular design
- **Code Quality**: ESLint configuration and consistent formatting
- **Documentation**: Comprehensive README and inline code comments
- **Testing**: Automated test suites and validation scripts
- **Security**: Production-ready security measures

## 📄 **License**

This project is built for educational purposes and demonstrates modern web development practices for SQL learning platforms.

## 🎉 **Acknowledgments**

CipherSQLStudio showcases:
- **Modern React Development** with functional components and hooks
- **Professional SCSS Architecture** with mobile-first responsive design
- **Secure Backend Development** with comprehensive validation
- **AI Integration** for educational enhancement
- **Production-Ready Practices** for scalable web applications

---

**CipherSQLStudio - Where SQL Learning Meets Modern Technology! 🚀**