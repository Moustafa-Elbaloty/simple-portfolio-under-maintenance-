
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seed...');

  // Clear existing data
  console.log('🧹 Cleaning existing data...');
  await prisma.socialLink.deleteMany();
  await prisma.contactInfo.deleteMany();
  await prisma.achievement.deleteMany();
  await prisma.skill.deleteMany();
  await prisma.skillCategory.deleteMany();
  await prisma.project.deleteMany();
  await prisma.aboutCard.deleteMany();
  await prisma.heroContent.deleteMany();
  await prisma.personalInfo.deleteMany();
  await prisma.file.deleteMany();


  // Create Personal Info
  console.log('👤 Creating personal info...');
  await prisma.personalInfo.createMany({
    data: [
      {
        lang: 'AR',
        firstName: 'مصطفى',
        lastName: 'أحمد',
        title: 'مهندس برمجيات  ',
        description: 'مهندس برمجيات متخصص في تطوير الحلول التقنية المبتكرة',
        bio: 'أجمع بين الخبرة التقنية والفهم العميق لاحتياجات السوق المحلي والعالمي. أركز على بناء حلول تقنية مبتكرة تساعد الشركات والأفراد على تحقيق أهدافهم.',
      },
      {
        lang: 'EN',
        firstName: 'Mostafa',
        lastName: 'Ahmed',
        title: 'Software Engineer',
        description: 'Software engineer specialized in developing innovative technical solutions.',
        bio: 'I combine technical expertise with deep understanding of local and global market needs. I focus on building innovative technical solutions that help companies and individuals achieve their goals.',
      }
    ]
  });

  // Create Hero Content
  console.log('🦸 Creating hero content...');
  await prisma.heroContent.createMany({
    data: [
      {
        lang: 'AR',
        name: 'مصطفى أحمد',
        mainTitle: 'مهندس برمجيات ومبتكر حلول',
        subTitle: 'أحول الأفكار إلى واقع رقمي',
        description: 'مرحباً بك! أنا مصطفى، مهندس برمجيات شغوف بتطوير الحلول التقنية المبتكرة. أتخصص في تطوير تطبيقات الويب والموبايل',
        dynamicTexts: ['مطور ويب', 'مطور واجهه أماميهr', 'مطور واجهه خلفيه', 'مبتكر حلول'],
        ctaText: 'تواصل معي',
      },
      {
        lang: 'EN',
        name: 'Moustafa Ahmed',
        mainTitle: 'Software Engineer & Solution Innovator',
        subTitle: 'Turning ideas into digital reality',
        description: 'Welcome! I\'m Mostafa, a passionate software engineer dedicated to developing innovative technical solutions. I specialize in web and mobile app development, and work on AI and automation projects.',
        dynamicTexts: ['Web Developer', 'Front-End', 'Back-End', 'Solution Innovator'],
        ctaText: 'Contact Me',
      }
    ]
  });

  // Create About Cards
  console.log('📋 Creating about cards...');
  const aboutCardsAr = [
    {
      lang: 'AR' as const,
      title: 'مين أنا؟',
      question: 'مين أنا؟',
      answer: 'مهندس برمجيات متخصص في تطوير الحلول التقنية المبتكر. أجمع بين الخبرة التقنية والفهم العميق لاحتياجات السوق المحلي والعالمي.',
      gradient: 'from-blue-500 to-purple-600',
      order: 0
    },
    {
      lang: 'AR' as const,
      title: 'بدأت منين؟',
      question: 'بدأت منين؟',
      answer: 'بدأتُ رحلتي في تعلّم البرمجة من خلال التعلّم الذاتي عبر الإنترنت، حيث اكتسبتُ أساسيات هندسة البرمجيات وطوّرتُ مهاراتي تدريجيًا. عملتُ على تنفيذ مشاريع عملية حقيقية ساعدتني على بناء خبرة قوية في تطوير الويب، مع حرص دائم على كتابة كود منظم وتحسين تجربة المستخدم.',
      gradient: 'from-green-500 to-teal-600',
      order: 1
    },
    {
      lang: 'AR' as const,
      title: 'بعمل إيه دلوقتي؟',
      question: 'بعمل إيه دلوقتي؟',
      answer: 'حالياً  أعمل كمهندس برمجيات في مشاريع متنوعة. أركز على تطوير تطبيقات الويب بـ React and  Angular',
      gradient: 'from-orange-500 to-red-600',
      order: 2
    },
    {
      lang: 'AR' as const,
      title: 'إيه تخصصي؟',
      question: 'إيه تخصصي؟',
      answer: 'مطوّر Full Stack محترف يمتلك خبرة عملية قوية في Angular وReact وNode.js وExpress.js.',
      gradient: 'from-purple-500 to-pink-600',
      order: 3
    },
    {
      lang: 'AR' as const,
      title: 'إيه هدفي؟',
      question: 'إيه هدفي؟',
      answer: 'هدفي بناء حلول تقنية مبتكرة تساعد الشركات والأفراد على تحقيق أهدافهم وتطوير أعمالهم. أسعى لتوفير تجربة مستخدم استثنائية وحلول تقنية فعالة تواكب التطور التكنولوجي السريع.',
      gradient: 'from-indigo-500 to-blue-600',
      order: 4
    },
    {
      lang: 'AR' as const,
      title: 'إيه اللي يميزني؟',
      question: 'إيه اللي يميزني؟',
      answer: 'يميزني الجمع بين الخبرة التقنية العميقة والفهم الواضح لاحتياجات السوق. أركز على كتابة كود نظيف وقابل للصيانة، مع اتباع أفضل الممارسات في التطوير والتصميم لضمان تقديم منتجات عالية الجودة.',
      gradient: 'from-yellow-500 to-orange-600',
      order: 5
    }
  ];

  const aboutCardsEn = [
    {
      lang: 'EN' as const,
      title: 'Who am I?',
      question: 'Who am I?',
      answer: 'A software engineer specialized in developing innovative technical solutions,I combine technical expertise with deep understanding of local and global market needs.',
      gradient: 'from-blue-500 to-purple-600',
      order: 0
    },
    {
      lang: 'EN' as const,
      title: 'Where did I start?',
      question: 'Where did I start?',
      answer: 'I started my programming journey through self-learning online, where I built a solid foundation in software engineering principles. Over time, I strengthened my skills by working on real, hands-on projects, gaining practical experience in web development, with a strong focus on clean code and user-friendly interfaces.',
      gradient: 'from-green-500 to-teal-600',
      order: 1
    },
    {
      lang: 'EN' as const,
      title: 'What do I do now?',
      question: 'What do I do now?',
      answer: 'Currently, I work as a software engineer on a variety of projects, focusing on developing web applications using React and Angular.',
      gradient: 'from-orange-500 to-red-600',
      order: 2
    },
    {
      lang: 'EN' as const,
      title: 'What\'s my specialty?',
      question: 'What\'s my specialty?',
      answer: 'A skilled Full Stack Developer with strong hands-on experience in Angular, React, Node.js, and Express.js.',
      gradient: 'from-purple-500 to-pink-600',
      order: 3
    },
    {
      lang: 'EN' as const,
      title: 'What\'s my goal?',
      question: 'What\'s my goal?',
      answer: 'My goal is to build innovative technical solutions that help companies and individuals achieve their goals and develop their businesses. I strive to provide exceptional user experience and effective technical solutions that keep up with rapid technological development.',
      gradient: 'from-indigo-500 to-blue-600',
      order: 4
    },
    {
      lang: 'EN' as const,
      title: 'What makes me unique?',
      question: 'What makes me unique?',
      answer: 'What distinguishes me is combining deep technical expertise with clear understanding of market needs. I focus on writing clean and maintainable code, following best practices in development and design to ensure delivering high-quality products.',
      gradient: 'from-yellow-500 to-orange-600',
      order: 5
    }
  ];

  await prisma.aboutCard.createMany({
    data: [...aboutCardsAr, ...aboutCardsEn]
  });

  // Create Skill Categories
  console.log('💪 Creating skill categories...');
  const skillCategoriesData = [
    // Arabic
    {
      lang: 'AR' as const,
      title: 'تطوير الويب',
      description: 'بناء مواقع وتطبيقات ويب حديثة وسريعة باستخدام أحدث التقنيات والأطر البرمجية.',
      gradient: 'from-blue-500 to-cyan-600',
      experience: '3+ سنوات خبرة',
      projectCount: 15,
      order: 0
    },
    {
      lang: 'AR' as const,
      title: 'تطوير التطبيقات',
      description: 'تطوير تطبيقات موبايل متعددة المنصات بواجهات مستخدم جميلة وأداء عالي.',
      gradient: 'from-green-500 to-emerald-600',
      experience: '3+ سنوات خبرة',
      projectCount: 8,
      order: 1
    },
    {
      lang: 'AR' as const,
      title: 'قواعد البيانات',
      description: 'تصميم وإدارة قواعد البيانات المحسنة للأداء العالي والأمان.',
      gradient: 'from-indigo-500 to-blue-600',
      experience: '3+ سنوات خبرة',
      projectCount: 20,
      order: 2
    },
    // English
    {
      lang: 'EN' as const,
      title: 'Web Development',
      description: 'Building modern and fast websites and web applications using the latest technologies and frameworks.',
      gradient: 'from-blue-500 to-cyan-600',
      experience: '5+ years experience',
      projectCount: 15,
      order: 0
    },
    {
      lang: 'EN' as const,
      title: 'Mobile Development',
      description: 'Developing cross-platform mobile applications with beautiful user interfaces and high performance.',
      gradient: 'from-green-500 to-emerald-600',
      experience: '3+ years experience',
      projectCount: 8,
      order: 1
    },
    {
      lang: 'EN' as const,
      title: 'Database',
      description: 'Designing and managing optimized databases for high performance and security.',
      gradient: 'from-indigo-500 to-blue-600',
      experience: '4+ years experience',
      projectCount: 20,
      order: 2
    }
  ];

  const skillCategories = await Promise.all(
    skillCategoriesData.map(category =>
      prisma.skillCategory.create({
        data: category
      })
    )
  );

  // Create Skills
  console.log('🛠️ Creating skills...');
  const skillsData = [
    // Web Development Skills - Arabic (categoryIndex: 0)
    { lang: 'AR', name: 'React.js & Angular', level: 'ADVANCED', categoryIndex: 0, order: 0 },
    { lang: 'AR', name: 'Node.js & Express', level: 'EXPERT', categoryIndex: 0, order: 1 },
    { lang: 'AR', name: 'TypeScript', level: 'ADVANCED', categoryIndex: 0, order: 2 },
    { lang: 'AR', name: 'Tailwind CSS', level: 'EXPERT', categoryIndex: 0, order: 3 },
    { lang: 'AR', name: 'REST APIs', level: 'ADVANCED', categoryIndex: 0, order: 4 },

    // Mobile Development Skills - Arabic (categoryIndex: 1)
    { lang: 'AR', name: 'Flutter & Dart', level: 'ADVANCED', categoryIndex: 1, order: 0 },
    { lang: 'AR', name: 'React Native', level: 'INTERMEDIATE', categoryIndex: 1, order: 1 },
    { lang: 'AR', name: 'iOS & Android Native', level: 'INTERMEDIATE', categoryIndex: 1, order: 2 },
    { lang: 'AR', name: 'Firebase Integration', level: 'ADVANCED', categoryIndex: 1, order: 3 },

    // Database Skills - Arabic (categoryIndex: 2)
    { lang: 'AR', name: 'MongoDB & PostgreSQL', level: 'EXPERT', categoryIndex: 2, order: 0 },
    { lang: 'AR', name: 'Database Design', level: 'EXPERT', categoryIndex: 2, order: 1 },
    { lang: 'AR', name: 'Query Optimization', level: 'ADVANCED', categoryIndex: 2, order: 2 },

    // Web Development Skills - English (categoryIndex: 3)
    { lang: 'EN', name: 'React.js & Angular', level: 'EXPERT', categoryIndex: 3, order: 0 },
    { lang: 'EN', name: 'Node.js & Express', level: 'ADVANCED', categoryIndex: 3, order: 1 },
    { lang: 'EN', name: 'TypeScript', level: 'ADVANCED', categoryIndex: 3, order: 2 },
    { lang: 'EN', name: 'Tailwind CSS', level: 'EXPERT', categoryIndex: 3, order: 3 },
    { lang: 'EN', name: 'REST APIs', level: 'ADVANCED', categoryIndex: 3, order: 4 },

    // Mobile Development Skills - English (categoryIndex: 4)
    { lang: 'EN', name: 'Flutter & Dart', level: 'ADVANCED', categoryIndex: 4, order: 0 },
    { lang: 'EN', name: 'React Native', level: 'INTERMEDIATE', categoryIndex: 4, order: 1 },
    { lang: 'EN', name: 'iOS & Android Native', level: 'INTERMEDIATE', categoryIndex: 4, order: 2 },
    { lang: 'EN', name: 'Firebase Integration', level: 'ADVANCED', categoryIndex: 4, order: 3 },

    // Database Skills - English (categoryIndex: 5)
    { lang: 'EN', name: 'MongoDB & PostgreSQL', level: 'EXPERT', categoryIndex: 5, order: 0 },
    { lang: 'EN', name: 'Database Design', level: 'EXPERT', categoryIndex: 5, order: 1 },
    { lang: 'EN', name: 'Query Optimization', level: 'ADVANCED', categoryIndex: 5, order: 2 }
  ];

  await Promise.all(
    skillsData.map(skill =>
      prisma.skill.create({
        data: {
          lang: skill.lang as 'AR' | 'EN',
          name: skill.name,
          level: skill.level as any,
          order: skill.order,
          skillCategoryId: skillCategories[skill.categoryIndex].id
        }
      })
    )
  );

  // Create Projects
  console.log('🚀 Creating projects...');
  const projectsData = [
    // Arabic Projects
    {
      lang: 'AR' as const,
      title: 'منصة الشاملة',
      description: 'موقع شركة متقدم يقدم خدمات تطوير الويب والتطبيقات مع نظام إدارة محتوى متطور ولوحة تحكم شاملة للعملاء والمشاريع.',
      longDescription: 'منصة شاملة تضم موقع الشركة، نظام CRM متطور، لوحة تحكم للمشاريع، وسائل الدفع المتعددة، وتقارير تفصيلية. المنصة تدعم عدة لغات ومحسنة للسيو.',
      status: 'COMPLETED' as const,
      category: 'web',
      projectUrl: '',
      githubUrl: '',
      duration: '4 أشهر',
      teamSize: '3 مطورين',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Laravel API'],
      features: ['نظام إدارة محتوى', 'متعدد اللغات', 'محسن للسيو', 'لوحة تحكم شاملة'],
      order: 0,
      isFeatured: true
    },
    {
      lang: 'AR' as const,
      title: 'نظام ChatBot AI المتطور',
      description: 'chatbot ذكي للشركات مع معالجة اللغة الطبيعية، تعلم آلي، ودمج مع أنظمة CRM لخدمة عملاء متفوقة على مدار الساعة.',
      longDescription: 'نظام ذكاء اصطناعي متقدم يدعم المحادثات باللغة العربية والإنجليزية، مع قدرات تعلم مستمر وتحليل للمشاعر، ودمج مع أنظمة الشركة المختلفة.',
      status: 'COMPLETED' as const,
      category: 'ai',
      projectUrl: '',
      githubUrl: '',
      duration: '6 أشهر',
      teamSize: '2 مطورين',
      technologies: ['Python', 'TensorFlow', 'NLP', 'FastAPI', 'Redis'],
      features: ['معالجة اللغة الطبيعية', 'تعلم آلي', 'دعم متعدد اللغات', 'تحليل المشاعر'],
      order: 1,
      isFeatured: true
    },
    {
      lang: 'AR' as const,
      title: 'منصة الزراعة الذكية',
      description: 'نظام متكامل لمراقبة المحاصيل باستخدام طائرة DJI Mavic 3M مع معالجة الصور بالذكاء الاصطناعي وتحليل البيانات الزراعية.',
      longDescription: 'منصة شاملة تجمع بين تقنيات الطائرات المسيرة والذكاء الاصطناعي لمراقبة المحاصيل، تحليل التربة، كشف الآفات، وتوفير توصيات زراعية مخصصة للمزارعين.',
      status: 'COMPLETED' as const,
      category: 'iot',
      projectUrl: '',
      githubUrl: '',
      duration: '8 أشهر',
      teamSize: '4 مطورين',
      technologies: ['Python', 'OpenCV', 'Machine Learning', 'IoT', 'React Dashboard'],
      features: ['تحليل الصور الجوية', 'كشف الآفات', 'تحليل التربة', 'تقارير مفصلة'],
      order: 2,
      isFeatured: false
    },
    {
      lang: 'AR' as const,
      title: 'تطبيق EcoLife Mobile',
      description: 'تطبيق Flutter متعدد المنصات للحياة الصحية والبيئية مع تتبع الأنشطة، نصائح بيئية، ونظام مكافآت تفاعلي.',
      longDescription: 'تطبيق شامل يساعد المستخدمين على تبني نمط حياة صحي وصديق للبيئة، مع ميزات تتبع الأنشطة، حساب البصمة الكربونية، ومجتمع تفاعلي للمستخدمين.',
      status: 'COMPLETED' as const,
      category: 'mobile',
      projectUrl: '',
      githubUrl: '',
      duration: '5 أشهر',
      teamSize: '2 مطورين',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Google Maps API', 'Push Notifications'],
      features: ['تتبع الأنشطة', 'حساب البصمة الكربونية', 'نظام مكافآت', 'مجتمع تفاعلي'],
      order: 3,
      isFeatured: true
    },

    // English Projects
    {
      lang: 'EN' as const,
      title: ' Comprehensive Platform',
      description: 'Advanced company website providing web and application development services with sophisticated content management system and comprehensive dashboard for clients and projects.',
      longDescription: 'Comprehensive platform including company website, advanced CRM system, project control dashboard, multiple payment methods, and detailed reports. The platform supports multiple languages and is SEO optimized.',
      status: 'COMPLETED' as const,
      category: 'web',
      projectUrl: '',
      githubUrl: '',
      duration: '4 months',
      teamSize: '3 developers',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Laravel API'],
      features: ['Content Management System', 'Multi-language', 'SEO Optimized', 'Comprehensive Dashboard'],
      order: 0,
      isFeatured: true
    },
    {
      lang: 'EN' as const,
      title: 'Advanced ChatBot AI System',
      description: 'Smart chatbot for businesses with natural language processing, machine learning, and CRM integration for superior 24/7 customer service.',
      longDescription: 'Advanced AI system supporting conversations in Arabic and English, with continuous learning capabilities and sentiment analysis, integrated with various company systems.',
      status: 'COMPLETED' as const,
      category: 'ai',
      projectUrl: '',
      githubUrl: '',
      duration: '6 months',
      teamSize: '2 developers',
      technologies: ['Python', 'TensorFlow', 'NLP', 'FastAPI', 'Redis'],
      features: ['Natural Language Processing', 'Machine Learning', 'Multi-language Support', 'Sentiment Analysis'],
      order: 1,
      isFeatured: true
    },
    {
      lang: 'EN' as const,
      title: 'Smart Agriculture Platform',
      description: 'Integrated system for crop monitoring using DJI Mavic 3M drone with AI image processing and agricultural data analysis.',
      longDescription: 'Comprehensive platform combining drone technology and artificial intelligence for crop monitoring, soil analysis, pest detection, and providing customized agricultural recommendations for farmers.',
      status: 'COMPLETED' as const,
      category: 'iot',
      projectUrl: '',
      githubUrl: '',
      duration: '8 months',
      teamSize: '4 developers',
      technologies: ['Python', 'OpenCV', 'Machine Learning', 'IoT', 'React Dashboard'],
      features: ['Aerial Image Analysis', 'Pest Detection', 'Soil Analysis', 'Detailed Reports'],
      order: 2,
      isFeatured: false
    },
    {
      lang: 'EN' as const,
      title: 'EcoLife Mobile App',
      description: 'Cross-platform Flutter app for healthy and environmental living with activity tracking, environmental tips, and interactive rewards system.',
      longDescription: 'Comprehensive app helping users adopt a healthy and eco-friendly lifestyle, with features for activity tracking, carbon footprint calculation, and interactive user community.',
      status: 'COMPLETED' as const,
      category: 'mobile',
      projectUrl: '',
      githubUrl: '',
      duration: '5 months',
      teamSize: '2 developers',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Google Maps API', 'Push Notifications'],
      features: ['Activity Tracking', 'Carbon Footprint Calculation', 'Rewards System', 'Interactive Community'],
      order: 3,
      isFeatured: true
    }
  ];

  await prisma.project.createMany({
    data: projectsData
  });

  // Create Achievements
  console.log('🏆 Creating achievements...');
  const achievementsData = [
    // Arabic
    {
      lang: 'AR' as const,
      title: '+20 مشروع',
      subtitle: 'مشروع مكتمل',
      description: 'مشاريع متنوعة من مواقع الويب إلى تطبيقات الموبايل',
      value: '+20',
      order: 0
    },
    {
      lang: 'AR' as const,
      title: '+15 عميل سعيد',
      subtitle: 'عميل راضي',
      description: 'عملاء من مختلف القطاعات حققوا أهدافهم معنا',
      value: '+15',
      order: 1
    },
    {
      lang: 'AR' as const,
      title: '+3 سنوات خبرة',
      subtitle: 'في المجال',
      description: 'خبرة متراكمة في تقنيات البرمجة الحديثة',
      value: '+3',
      order: 2
    },
    {
      lang: 'AR' as const,
      title: '3 منتجات مبتكرة',
      subtitle: 'حلول فريدة',
      description: 'أنظمة ذكية ومتطورة تلبي احتياجات السوق',
      value: '3',
      order: 3
    },
    {
      lang: 'AR' as const,
      title: '98% معدل نجاح',
      subtitle: 'في المشاريع',
      description: 'التزام بالجودة والمواعيد المحددة',
      value: '98%',
      order: 4
    },

    // English
    {
      lang: 'EN' as const,
      title: '+20 Projects',
      subtitle: 'Completed projects',
      description: 'Diverse projects from websites to mobile applications',
      value: '+20',
      order: 0
    },
    {
      lang: 'EN' as const,
      title: '+15 Happy Clients',
      subtitle: 'Satisfied clients',
      description: 'Clients from various sectors achieved their goals with us',
      value: '+15',
      order: 1
    },
    {
      lang: 'EN' as const,
      title: '+5 Years Experience',
      subtitle: 'In the field',
      description: 'Accumulated experience in modern programming technologies',
      value: '+5',
      order: 2
    },
    {
      lang: 'EN' as const,
      title: '3 Innovative Products',
      subtitle: 'Unique solutions',
      description: 'Smart and advanced systems meeting market needs',
      value: '3',
      order: 3
    },
    {
      lang: 'EN' as const,
      title: '98% Success Rate',
      subtitle: 'In projects',
      description: 'Commitment to quality and specified deadlines',
      value: '98%',
      order: 4
    }
  ];

  await prisma.achievement.createMany({
    data: achievementsData
  });

  // Create Contact Info
  console.log('📞 Creating contact info...');
  const contactInfoData = [
    // Arabic
    {
      lang: 'AR' as const,
      type: 'email',
      label: 'البريد الإلكتروني',
      value: 'Moustafaelbaloty@gmail.com',
      link: 'mailto:Moustafaelbaloty@gmail.com',
      icon: 'Mail',
      order: 0,
      isPrimary: true
    },
    {
      lang: 'AR' as const,
      type: 'phone',
      label: 'رقم الهاتف',
      value: '+20 106 055 7076',
      link: 'tel:+201060557076',
      icon: 'Phone',
      order: 1,
      isPrimary: true
    },
    {
      lang: 'AR' as const,
      type: 'whatsapp',
      label: 'واتساب',
      value: 'تواصل مباشر',
      link: 'https://wa.me/201060557076',
      icon: 'MessageCircle',
      order: 2,
      isPrimary: false
    },
    {
      lang: 'AR' as const,
      type: 'location',
      label: 'الموقع',
      value: 'القاهرة، مصر',
      link: '#',
      icon: 'MapPin',
      order: 3,
      isPrimary: false
    },

    // English
    {
      lang: 'EN' as const,
      type: 'email',
      label: 'Email',
      value: 'Moustafaelbaloty@gmail.com',
      link: 'mailto:Moustafaelbaloty@gmail.com',
      icon: 'Mail',
      order: 0,
      isPrimary: true
    },
    {
      lang: 'EN' as const,
      type: 'phone',
      label: 'Phone',
      value: '+20 106 055 7076',
      link: 'tel:+201060557076',
      icon: 'Phone',
      order: 1,
      isPrimary: true
    },
    {
      lang: 'EN' as const,
      type: 'whatsapp',
      label: 'WhatsApp',
      value: 'Direct contact',
      link: 'https://wa.me/201060557076',
      icon: 'MessageCircle',
      order: 2,
      isPrimary: false
    },
    {
      lang: 'EN' as const,
      type: 'location',
      label: 'Location',
      value: 'Cairo, Egypt',
      link: '#',
      icon: 'MapPin',
      order: 3,
      isPrimary: false
    }
  ];

  await prisma.contactInfo.createMany({
    data: contactInfoData
  });

  // Create Social Links
  console.log('🔗 Creating social links...');
  const socialLinksData = [
    // Arabic
    {
      lang: 'AR' as const,
      name: 'LinkedIn',
      url: '',
      icon: 'LinkedIn',
      order: 0
    },
    {
      lang: 'AR' as const,
      name: 'GitHub',
      url: '',
      icon: 'GitHub',
      order: 1
    },
    {
      lang: 'AR' as const,
      name: 'Twitter',
      url: '#',
      icon: 'Twitter',
      order: 2
    },
    {
      lang: 'AR' as const,
      name: 'Instagram',
      url: '#',
      icon: 'Instagram',
      order: 3
    },

    // English
    {
      lang: 'EN' as const,
      name: 'LinkedIn',
      url: '',
      icon: 'LinkedIn',
      order: 0
    },
    {
      lang: 'EN' as const,
      name: 'GitHub',
      url: '#',
      icon: 'GitHub',
      order: 1
    },
    {
      lang: 'EN' as const,
      name: 'Twitter',
      url: '#',
      icon: 'Twitter',
      order: 2
    },
    {
      lang: 'EN' as const,
      name: 'Instagram',
      url: '#',
      icon: 'Instagram',
      order: 3
    }
  ];

  await prisma.socialLink.createMany({
    data: socialLinksData
  });

  // Create a demo admin user
  console.log('👤 Creating demo admin user...');
  await prisma.user.upsert({
    where: { email: 'moustafaelbaloty@gmail.com' },
    update: {
      password: await bcrypt.hash('password', 12)
    },
    create: {
      email: 'moustafaelbaloty@gmail.com',
      password: await bcrypt.hash('password', 12),
    }
  });

  console.log('✅ Database seeding completed successfully!');
  console.log('📊 Summary:');
  console.log('- Personal Info: 2 records (AR, EN)');
  console.log('- Hero Content: 2 records (AR, EN)');
  console.log('- About Cards: 12 records (6 AR, 6 EN)');
  console.log('- Skill Categories: 6 records (3 AR, 3 EN)');
  console.log('- Skills: 27 records');
  console.log('- Projects: 8 records (4 AR, 4 EN)');
  console.log('- Achievements: 10 records (5 AR, 5 EN)');
  console.log('- Contact Info: 8 records (4 AR, 4 EN)');
  console.log('- Social Links: 8 records (4 AR, 4 EN)');
  console.log('- Users: 1 admin user');
  console.log('');
  console.log('🔑 Admin credentials:');
  console.log('Email: moustafaelbaloty@gmail.com');
  console.log('Password: password');
}

main()
  .catch((e) => {
    console.error('❌ Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });