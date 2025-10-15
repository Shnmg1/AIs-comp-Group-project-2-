// Videos Page Module
class VideosPage {
  constructor(app) {
    this.app = app;
    this.videos = [];
    this.filteredVideos = [];
    this.currentSubject = 'all';
    this.currentSchoolLevel = 'elementary';
    this.currentGrade = 'all';
    this.currentResourceType = 'all';
    this.currentSort = 'new';
  }

  async render() {
    this.app.showLoading();
    
    try {
      await this.loadVideos();
      this.displayVideos();
      // Apply initial filters after HTML is rendered
      setTimeout(() => {
        this.applyFilters();
      }, 100);
    } catch (error) {
      console.error('Error loading videos:', error);
      this.app.showError('Failed to load educational videos. Please try again later.');
    }
  }

  async loadVideos() {
    // Real video data for Mississippi Quality Education Platform
    this.videos = [
      {
        id: 1,
        title: "Mississippi for Kids - US States Learning Video",
        subject: "History",
        description: "A fun, quick overview of Mississippi's facts, nickname, and basic geography, suitable for younger students.",
        duration: "4:04",
        difficulty: "Beginner",
        thumbnail: "https://img.youtube.com/vi/W6H58RFao2c/maxresdefault.jpg",
        instructor: "Homeschool Pop",
        grade: "3",
        type: "Tutorial",
        dateAdded: "2024-01-15",
        videoType: "youtube",
        videoId: "W6H58RFao2c",
        source: "YouTube"
      },
      {
        id: 2,
        title: "History of Mississippi: Lesson for Kids",
        subject: "History",
        description: "Covers Native Americans, European settlement, statehood, the Civil War (Vicksburg), and the Civil Rights Movement.",
        duration: "Varies",
        difficulty: "Intermediate",
        thumbnail: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=300&fit=crop&crop=center",
        instructor: "Study.com",
        grade: "7",
        type: "Lecture",
        dateAdded: "2024-01-10",
        videoType: "external",
        externalUrl: "https://study.com/academy/lesson/history-of-mississippi-lesson-for-kids.html",
        source: "Study.com",
        note: "Requires free Study.com account"
      },
      {
        id: 3,
        title: "How Elections REALLY Work - Electoral College",
        subject: "History",
        description: "Explores one of the most misunderstood parts of our electoral system, focusing on the history and mechanics of the Electoral College.",
        duration: "11:34",
        difficulty: "Advanced",
        thumbnail: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=500&h=300&fit=crop&crop=center",
        instructor: "PBS LearningMedia",
        grade: "11",
        type: "Lecture",
        dateAdded: "2024-01-08",
        videoType: "external",
        externalUrl: "https://www.pbslearningmedia.org/resource/civ25-soc-the-electoral-college/civics-made-easy/",
        source: "PBS LearningMedia"
      },
      {
        id: 4,
        title: "U.S. History Collection for Middle and High School",
        subject: "History",
        description: "A comprehensive collection of videos, interactives, and media covering all major U.S. history eras from Pre-Colonial America to the 21st Century.",
        duration: "Varies (Collection)",
        difficulty: "Intermediate",
        thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop&crop=center",
        instructor: "PBS LearningMedia",
        grade: "8",
        type: "Interactive",
        dateAdded: "2024-01-05",
        videoType: "external",
        externalUrl: "https://aptv.pbslearningmedia.org/collection/us-history-collection/home/",
        source: "PBS LearningMedia"
      },
      {
        id: 5,
        title: "Civics and Government Resources",
        subject: "History",
        description: "A collection of videos teaching civic knowledge, including the structure of government and constitutional democracy.",
        duration: "Varies (Collection)",
        difficulty: "Intermediate",
        thumbnail: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=300&fit=crop&crop=center",
        instructor: "PBS LearningMedia",
        grade: "7",
        type: "Interactive",
        dateAdded: "2024-01-12",
        videoType: "external",
        externalUrl: "https://aptv.pbslearningmedia.org/collection/civics-made-easy/",
        source: "PBS LearningMedia"
      },
      {
        id: 6,
        title: "Eyes on the Prize - Civil Rights Movement Series",
        subject: "History",
        description: "Documentary covering the Civil Rights Movement, with several episodes focusing directly on key Mississippi events (James Meredith, Freedom Summer).",
        duration: "Varies (30-60+ min episodes)",
        difficulty: "Advanced",
        thumbnail: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=500&h=300&fit=crop&crop=center",
        instructor: "PBS American Experience",
        grade: "11",
        type: "Documentary",
        dateAdded: "2024-01-18",
        videoType: "external",
        externalUrl: "https://www.pbs.org/wgbh/americanexperience/films/eyesontheprize/",
        source: "PBS American Experience"
      },
      {
        id: 7,
        title: "U.S. History Courses - Khan Academy",
        subject: "History",
        description: "Links directly to the full, free course on U.S. History, providing video lessons on everything from the colonial era to modern times.",
        duration: "Varies (Collection)",
        difficulty: "Intermediate",
        thumbnail: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&h=300&fit=crop&crop=center",
        instructor: "Khan Academy",
        grade: "8",
        type: "Interactive",
        dateAdded: "2024-01-20",
        videoType: "external",
        externalUrl: "https://www.khanacademy.org/humanities/us-history",
        source: "Khan Academy"
      },
      {
        id: 8,
        title: "AP U.S. Government & Politics Course",
        subject: "History",
        description: "Advanced video lectures and practice for students preparing for higher-level history/government courses.",
        duration: "Varies (Collection)",
        difficulty: "Advanced",
        thumbnail: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&h=300&fit=crop&crop=center",
        instructor: "Khan Academy",
        grade: "12",
        type: "Lecture",
        dateAdded: "2024-01-22",
        videoType: "external",
        externalUrl: "https://www.khanacademy.org/humanities/ap-us-government-and-politics",
        source: "Khan Academy"
      },
      {
        id: 10,
        title: "Civil Rights Movement: 1964 Mississippi Freedom Democratic Party",
        subject: "History",
        description: "An in-depth lecture/testimonial from a participant in the Mississippi Freedom Summer Project, excellent primary source context.",
        duration: "1:17:28",
        difficulty: "Advanced",
        thumbnail: "https://img.youtube.com/vi/lteYxKtKRcE/maxresdefault.jpg",
        instructor: "University of Rochester",
        grade: "12",
        type: "Documentary",
        dateAdded: "2024-01-16",
        videoType: "youtube",
        videoId: "lteYxKtKRcE",
        source: "YouTube"
      },
      // English Language Arts Videos
      {
        id: 11,
        title: "Language Arts Learning Videos for Kids",
        subject: "English",
        description: "A long compilation of videos covering parts of speech, rhyming, synonyms, antonyms, and sentence fragments/run-ons.",
        duration: "1:29:40",
        difficulty: "Beginner",
        thumbnail: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        instructor: "Homeschool Pop",
        grade: "2",
        type: "Tutorial",
        dateAdded: "2024-01-25",
        videoType: "youtube",
        videoId: "xOaMIwak7Ms",
        source: "YouTube"
      },
      {
        id: 12,
        title: "Story Pirates University: Made-Up Inventions",
        subject: "English",
        description: "Fun video encouraging students to use real scientific words in imaginative writing to improve vocabulary and detail.",
        duration: "2:52",
        difficulty: "Beginner",
        thumbnail: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=300&fit=crop&crop=center",
        instructor: "PBS LearningMedia (Camp TV)",
        grade: "4",
        type: "Interactive",
        dateAdded: "2024-01-24",
        videoType: "external",
        externalUrl: "https://aptv.pbslearningmedia.org/resource/story-pirates-university-made-up-inventions-video/camp-tv/",
        source: "PBS LearningMedia"
      },
      {
        id: 13,
        title: "Literary Elements and Techniques: Tone and Mood",
        subject: "English",
        description: "A short, focused video introducing middle-grade literary analysis concepts.",
        duration: "2:28",
        difficulty: "Intermediate",
        thumbnail: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=300&fit=crop&crop=center",
        instructor: "PBS LearningMedia (WNET)",
        grade: "5",
        type: "Tutorial",
        dateAdded: "2024-01-23",
        videoType: "external",
        externalUrl: "https://aptv.pbslearningmedia.org/resource/litel18-tam/literary-elements-and-techniques-tone-and-mood/",
        source: "PBS LearningMedia"
      },
      {
        id: 14,
        title: "Grammar and Mechanics Playlist",
        subject: "English",
        description: "Links to the core grammar section for middle school students, covering parts of speech, punctuation, and usage.",
        duration: "Varies (Playlist)",
        difficulty: "Intermediate",
        thumbnail: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&h=300&fit=crop&crop=center",
        instructor: "Khan Academy",
        grade: "7",
        type: "Interactive",
        dateAdded: "2024-01-22",
        videoType: "external",
        externalUrl: "https://www.khanacademy.org/humanities/grammar",
        source: "Khan Academy"
      },
      {
        id: 15,
        title: "Crash Course Literature Series",
        subject: "English",
        description: "Fun, fast-paced videos providing high-level summaries and analysis of classic literature titles commonly taught in middle and high school.",
        duration: "Varies (Playlist)",
        difficulty: "Intermediate",
        thumbnail: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=300&fit=crop&crop=center",
        instructor: "Crash Course",
        grade: "8",
        type: "Lecture",
        dateAdded: "2024-01-21",
        videoType: "external",
        externalUrl: "https://www.youtube.com/watch?v=MSYw502dJNY&list=PLWkIOn7DGRlJzepuPNXU6CrHEjatOLg5S",
        source: "YouTube"
      },
      // STEM Videos
      {
        id: 21,
        title: "Tropical Rhythms and Counting by 10s",
        subject: "STEM",
        description: "A fun, quick video introducing or practicing counting by tens with tropical music and engaging visuals.",
        duration: "2:32",
        difficulty: "Beginner",
        thumbnail: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=500&h=300&fit=crop&crop=center",
        instructor: "PBS LearningMedia (Camp TV)",
        grade: "1",
        type: "Interactive",
        dateAdded: "2024-01-26",
        videoType: "external",
        externalUrl: "https://aptv.pbslearningmedia.org/resource/tropical-rhythms-counting-by-10s-video/campt-tv/",
        source: "PBS LearningMedia"
      },
      {
        id: 22,
        title: "Observing & Asking Questions - Scientific Inquiry",
        subject: "STEM",
        description: "A mini-lesson that teaches students foundational scientific practices like observation and forming questions.",
        duration: "5 min (Mini-Lesson)",
        difficulty: "Beginner",
        thumbnail: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=500&h=300&fit=crop&crop=center",
        instructor: "Mystery Science",
        grade: "3",
        type: "Interactive",
        dateAdded: "2024-01-25",
        videoType: "external",
        externalUrl: "https://mysteryscience.com/trending/mystery-10/observing-asking-questions/264#slide-id-4719",
        source: "Mystery Science"
      },
      {
        id: 23,
        title: "Natural World Videos - Animals & Ecology",
        subject: "STEM",
        description: "High-quality videos about animals, habitats, and ecology. Search for topics like 'ecosystems' or 'food webs.'",
        duration: "5:00:00",
        difficulty: "Beginner",
        thumbnail: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=300&fit=crop&crop=center",
        instructor: "National Geographic Kids",
        grade: "4",
        type: "Interactive",
        dateAdded: "2024-01-24",
        videoType: "youtube",
        videoId: "u-dEnJpCGAQ",
        source: "YouTube"
      },
      {
        id: 24,
        title: "Pre-Algebra/Algebra Basics",
        subject: "STEM",
        description: "Direct link to the full Khan Academy math curriculum for middle school. Focus on concepts like fractions, proportions, and linear equations.",
        duration: "Varies (Playlist)",
        difficulty: "Intermediate",
        thumbnail: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=500&h=300&fit=crop&crop=center",
        instructor: "Khan Academy",
        grade: "7",
        type: "Interactive",
        dateAdded: "2024-01-23",
        videoType: "external",
        externalUrl: "https://www.khanacademy.org/math",
        source: "Khan Academy"
      },
      {
        id: 25,
        title: "Can Sound Help Save Coral Reefs?",
        subject: "STEM",
        description: "An engaging, real-world example of Engineering & Technology solving an environmental problem.",
        duration: "3:41",
        difficulty: "Intermediate",
        thumbnail: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=300&fit=crop&crop=center",
        instructor: "PBS LearningMedia (NOVA)",
        grade: "8",
        type: "Documentary",
        dateAdded: "2024-01-22",
        videoType: "external",
        externalUrl: "https://aptv.pbslearningmedia.org/resource/nvbs-sci-soundcoral/can-sound-help-save-coral-reefs-nova/",
        source: "PBS LearningMedia"
      },
      {
        id: 26,
        title: "Crash Course Chemistry/Physics",
        subject: "STEM",
        description: "Fast-paced, engaging videos covering a full curriculum of high school science topics.",
        duration: "Varies (Playlist)",
        difficulty: "Advanced",
        thumbnail: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=500&h=300&fit=crop&crop=center",
        instructor: "Crash Course",
        grade: "10",
        type: "Lecture",
        dateAdded: "2024-01-21",
        videoType: "external",
        externalUrl: "https://www.youtube.com/watch?v=OoO5d5P0Jn4&list=PL8dPuuaLjXtN0ge7yDk_UA0ldZJdhwkoV",
        source: "YouTube"
      },
      {
        id: 27,
        title: "Algebra 1",
        subject: "STEM",
        description: "Direct links to the full high school math courses for comprehensive lesson support.",
        duration: "Varies (Collection)",
        difficulty: "Advanced",
        thumbnail: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=500&h=300&fit=crop&crop=center",
        instructor: "Khan Academy",
        grade: "11",
        type: "Interactive",
        dateAdded: "2024-01-20",
        videoType: "external",
        externalUrl: "https://www.khanacademy.org/math/algebra",
        source: "Khan Academy"
      },
      {
        id: 28,
        title: "Short Physics Explanations",
        subject: "STEM",
        description: "Extremely short, visually engaging videos explaining complex physics concepts (e.g., how bikes work, the color of the sky) in under 3 minutes.",
        duration: "Varies (Playlist)",
        difficulty: "Advanced",
        thumbnail: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=500&h=300&fit=crop&crop=center",
        instructor: "MinutePhysics",
        grade: "12",
        type: "Tutorial",
        dateAdded: "2024-01-19",
        videoType: "external",
        externalUrl: "https://www.youtube.com/@MinutePhysics",
        source: "YouTube"
      },
      // Additional History Videos
      {
        id: 31,
        title: "7 Facts about Mississippi",
        subject: "History",
        description: "Brief, interesting facts about MS history, statehood, and the delayed ratification of the 13th Amendment.",
        duration: "2:05",
        difficulty: "Beginner",
        thumbnail: "https://img.youtube.com/vi/c7DkMTw6rfA/maxresdefault.jpg",
        instructor: "7Facts",
        grade: "3",
        type: "Educational",
        dateAdded: "2024-01-30",
        videoType: "youtube",
        videoId: "c7DkMTw6rfA",
        source: "YouTube"
      },
      {
        id: 34,
        title: "Take a tour of Jackson, the city where Civil Rights Movement history was made",
        subject: "History",
        description: "Highlights key locations in Jackson, connecting history to place.",
        duration: "3:42",
        difficulty: "Intermediate",
        thumbnail: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=300&fit=crop&crop=center",
        instructor: "Euronews Travel",
        grade: "7",
        type: "Tour",
        dateAdded: "2024-01-30",
        videoType: "youtube",
        videoId: "jOfPfJOmxKI",
        source: "YouTube"
      },
      {
        id: 35,
        title: "The U.S. Constitution: Crash Course Kids #34.2",
        subject: "History",
        description: "Explains the purpose of the Constitution and the role of the Bill of Rights.",
        duration: "7:06",
        difficulty: "Intermediate",
        thumbnail: "https://img.youtube.com/vi/RD-2dvaG4UY/maxresdefault.jpg",
        instructor: "Crash Course Kids",
        grade: "7",
        type: "Educational",
        dateAdded: "2024-01-30",
        videoType: "youtube",
        videoId: "RD-2dvaG4UY",
        source: "YouTube"
      },
      {
        id: 36,
        title: "The Cold War: Crash Course US History #37",
        subject: "History",
        description: "An overview of the post-WWII political era and the context for domestic tensions.",
        duration: "12:59",
        difficulty: "Intermediate",
        thumbnail: "https://img.youtube.com/vi/9C72ISMF_D0/maxresdefault.jpg",
        instructor: "Crash Course",
        grade: "8",
        type: "Educational",
        dateAdded: "2024-01-30",
        videoType: "youtube",
        videoId: "9C72ISMF_D0",
        source: "YouTube"
      },
      {
        id: 37,
        title: "A 3-minute guide to the Bill of Rights",
        subject: "History",
        description: "A concise, animated breakdown of the first ten amendments.",
        duration: "10:49",
        difficulty: "Advanced",
        thumbnail: "https://img.youtube.com/vi/yYEfLm5dLMQ/maxresdefault.jpg",
        instructor: "Ted-Ed",
        grade: "10",
        type: "Educational",
        dateAdded: "2024-01-30",
        videoType: "youtube",
        videoId: "yYEfLm5dLMQ",
        source: "YouTube"
      },
      {
        id: 38,
        title: "The War of 1812 - Crash Course US History #11",
        subject: "History",
        description: "Covers early 19th-century conflicts and western expansion, relevant to Mississippi's statehood.",
        duration: "14:14",
        difficulty: "Advanced",
        thumbnail: "https://img.youtube.com/vi/qMXqg2PKJZU/maxresdefault.jpg",
        instructor: "Crash Course",
        grade: "11",
        type: "Educational",
        dateAdded: "2024-01-30",
        videoType: "youtube",
        videoId: "qMXqg2PKJZU",
        source: "YouTube"
      },
      {
        id: 39,
        title: "Federalism: Crash Course Government and Politics #4",
        subject: "History",
        description: "Explains the division of power between the state and federal governments.",
        duration: "8:12",
        difficulty: "Advanced",
        thumbnail: "https://img.youtube.com/vi/J0gosGXSgsI/maxresdefault.jpg",
        instructor: "Crash Course",
        grade: "11",
        type: "Educational",
        dateAdded: "2024-01-30",
        videoType: "youtube",
        videoId: "J0gosGXSgsI",
        source: "YouTube"
      },
      {
        id: 40,
        title: "Mississippi Civil Rights Museum Video Tour - Gallery 6",
        subject: "History",
        description: "A short clip showcasing a portion of the museum, excellent as a hook or context builder.",
        duration: "1:52",
        difficulty: "Advanced",
        thumbnail: "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?w=500&h=300&fit=crop&crop=center",
        instructor: "MS Civil Rights Museum",
        grade: "12",
        type: "Tour",
        dateAdded: "2024-01-30",
        videoType: "youtube",
        videoId: "p2bpvK9uS8o",
        source: "YouTube"
      },
      // Additional English Videos
      {
        id: 43,
        title: "Reading Comprehension For Beginners (Mind Game)",
        subject: "English",
        description: "Interactive exercise to help students practice their comprehension and accuracy with short passages.",
        duration: "3:51",
        difficulty: "Intermediate",
        thumbnail: "https://img.youtube.com/vi/rvR1RStga3o/maxresdefault.jpg",
        instructor: "Learning Game",
        grade: "6",
        type: "Interactive",
        dateAdded: "2024-01-30",
        videoType: "youtube",
        videoId: "rvR1RStga3o",
        source: "YouTube"
      },
      {
        id: 44,
        title: "How to use a semicolon",
        subject: "English",
        description: "A clear, animated lesson covering the proper rules for this complex punctuation mark.",
        duration: "4:51",
        difficulty: "Intermediate",
        thumbnail: "https://img.youtube.com/vi/th-zyfvwDdI/maxresdefault.jpg",
        instructor: "Ted-Ed",
        grade: "7",
        type: "Educational",
        dateAdded: "2024-01-30",
        videoType: "youtube",
        videoId: "th-zyfvwDdI",
        source: "YouTube"
      },
      {
        id: 47,
        title: "Comma Story - Terisa Folaron",
        subject: "English",
        description: "A fun, story-based way to understand the complex rules of comma usage, especially with conjunctions.",
        duration: "4:43",
        difficulty: "Advanced",
        thumbnail: "https://img.youtube.com/vi/GHnl1O3NGJk/maxresdefault.jpg",
        instructor: "Ted-Ed",
        grade: "11",
        type: "Educational",
        dateAdded: "2024-01-30",
        videoType: "youtube",
        videoId: "GHnl1O3NGJk",
        source: "YouTube"
      },
      {
        id: 48,
        title: "The Great Gatsby Part 1: Crash Course Literature 4",
        subject: "English",
        description: "High-level summary and analysis of a common high school novel.",
        duration: "13:30",
        difficulty: "Advanced",
        thumbnail: "https://img.youtube.com/vi/xw9Au9OoN88/maxresdefault.jpg",
        instructor: "Crash Course",
        grade: "11",
        type: "Educational",
        dateAdded: "2024-01-30",
        videoType: "youtube",
        videoId: "xw9Au9OoN88",
        source: "YouTube"
      },
      // Additional STEM Videos
      {
        id: 50,
        title: "Pollination",
        subject: "STEM",
        description: "A clip from a compilation explaining the process of pollination and the role of insects in plant reproduction.",
        duration: "14:20",
        difficulty: "Beginner",
        thumbnail: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&h=300&fit=crop&crop=center",
        instructor: "Homeschool Pop",
        grade: "1",
        type: "Educational",
        dateAdded: "2024-01-30",
        videoType: "youtube",
        videoId: "kYJt5kWNsbM",
        source: "YouTube"
      },
      {
        id: 51,
        title: "Weathering and Erosion",
        subject: "STEM",
        description: "Explains how the geosphere and hydrosphere interact to break down and move Earth's materials.",
        duration: "4:51",
        difficulty: "Beginner",
        thumbnail: "https://img.youtube.com/vi/R-Iak3Wvh9c/maxresdefault.jpg",
        instructor: "Crash Course Kids",
        grade: "3",
        type: "Educational",
        dateAdded: "2024-01-30",
        videoType: "youtube",
        videoId: "R-Iak3Wvh9c",
        source: "YouTube"
      },
      {
        id: 52,
        title: "The Life Cycle of a Butterfly",
        subject: "STEM",
        description: "Shows the four stages of metamorphosis using real-life footage and animation.",
        duration: "3:20",
        difficulty: "Beginner",
        thumbnail: "https://img.youtube.com/vi/3kZD6rlSLUw/maxresdefault.jpg",
        instructor: "ClickView",
        grade: "4",
        type: "Educational",
        dateAdded: "2024-01-30",
        videoType: "youtube",
        videoId: "3kZD6rlSLUw",
        source: "YouTube"
      },
      {
        id: 53,
        title: "Earth's Most Extreme Weather",
        subject: "STEM",
        description: "Explores extreme climates, introducing students to data about wind, rain, and temperature.",
        duration: "8:36",
        difficulty: "Beginner",
        thumbnail: "https://img.youtube.com/vi/XnQy_aKpMcw/maxresdefault.jpg",
        instructor: "SciShow Kids",
        grade: "5",
        type: "Educational",
        dateAdded: "2024-01-30",
        videoType: "youtube",
        videoId: "XnQy_aKpMcw",
        source: "YouTube"
      },
      {
        id: 55,
        title: "How to find the Area and Perimeter of a Rectangle",
        subject: "STEM",
        description: "A clear tutorial for common middle school geometry calculations.",
        duration: "10:11",
        difficulty: "Intermediate",
        thumbnail: "https://img.youtube.com/vi/gNqmI0f16QI/maxresdefault.jpg",
        instructor: "Mashup Math",
        grade: "7",
        type: "Tutorial",
        dateAdded: "2024-01-30",
        videoType: "youtube",
        videoId: "gNqmI0f16QI",
        source: "YouTube"
      },
      {
        id: 57,
        title: "Algebra 2 Introduction, Basic Review, Factoring, Slope, Absolute Value",
        subject: "STEM",
        description: "A comprehensive review for advanced algebra topics.",
        duration: "3:28:44",
        difficulty: "Advanced",
        thumbnail: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=500&h=300&fit=crop&crop=center",
        instructor: "The Organic Chemistry Tutor",
        grade: "11",
        type: "Tutorial",
        dateAdded: "2024-01-30",
        videoType: "youtube",
        videoId: "i6sbjtJjJ-A",
        source: "YouTube"
      },
      {
        id: 58,
        title: "Parallel & Perpendicular Lines, Alternate Interior & Exterior Angles, Transversals",
        subject: "STEM",
        description: "A geometry lesson on angle relationships when lines intersect.",
        duration: "8:12",
        difficulty: "Advanced",
        thumbnail: "https://img.youtube.com/vi/DFbT4vAg6fE/maxresdefault.jpg",
        instructor: "The Organic Chemistry Tutor",
        grade: "10",
        type: "Tutorial",
        dateAdded: "2024-01-30",
        videoType: "youtube",
        videoId: "DFbT4vAg6fE",
        source: "YouTube"
      },
      {
        id: 59,
        title: "The Nucleus: Crash Course Chemistry #1",
        subject: "STEM",
        description: "Introduction to atomic structure, protons, neutrons, and isotopes.",
        duration: "10:49",
        difficulty: "Advanced",
        thumbnail: "https://img.youtube.com/vi/FSyAehMdpyI/maxresdefault.jpg",
        instructor: "Crash Course",
        grade: "11",
        type: "Educational",
        dateAdded: "2024-01-30",
        videoType: "youtube",
        videoId: "FSyAehMdpyI",
        source: "YouTube"
      }
    ];
    
    this.filteredVideos = [...this.videos];
  }

  displayVideos() {
    const app = document.getElementById('app');
    app.innerHTML = `
      <div class="fade-in">
        <!-- Page Header -->
        <div class="container mt-4">
          <div class="row">
            <div class="col-12">
              <h1 class="display-5 fw-bold text-ms-navy mb-3">
                <i class="bi bi-play-circle-fill me-2"></i>Educational Videos
              </h1>
              <p class="lead text-muted">Watch engaging video lessons from experienced educators</p>
            </div>
          </div>
        </div>

        <!-- Filter Section -->
        <div class="container mb-4">
          <div class="row">
            <div class="col-12">
              <div class="card">
                <div class="card-body">
                  <!-- School Level Selection -->
                  <div class="row mb-4">
                    <div class="col-12">
                      <div class="d-flex gap-3 justify-content-center">
                        <button class="btn school-level-btn" id="elementaryBtn" onclick="app.pageModules.videos.selectSchoolLevel('elementary')">
                          <div class="d-flex flex-column align-items-center">
                            <i class="bi bi-house-door fs-4 mb-2"></i>
                            <span class="fw-bold">Elementary School</span>
                            <small>K - 5th Grade</small>
                          </div>
                        </button>
                        <button class="btn school-level-btn" id="middleBtn" onclick="app.pageModules.videos.selectSchoolLevel('middle')">
                          <div class="d-flex flex-column align-items-center">
                            <i class="bi bi-calculator fs-4 mb-2"></i>
                            <span class="fw-bold">Middle School</span>
                            <small>6th - 8th Grade</small>
                          </div>
                        </button>
                        <button class="btn school-level-btn" id="highBtn" onclick="app.pageModules.videos.selectSchoolLevel('high')">
                          <div class="d-flex flex-column align-items-center">
                            <i class="bi bi-mortarboard fs-4 mb-2"></i>
                            <span class="fw-bold">High School</span>
                            <small>9th - 12th Grade</small>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>

                  <!-- Grade Level Filter -->
                  <div class="row mb-4">
                    <div class="col-12">
                      <h6 class="text-ms-navy fw-bold mb-3">Filter by Specific Grade (Optional)</h6>
                      <div class="d-flex flex-wrap gap-2 mb-3" id="gradeButtons">
                        <!-- Grade buttons will be populated by JavaScript -->
                      </div>
                      <div class="d-flex align-items-center">
                        <i class="bi bi-info-circle text-primary me-2"></i>
                        <small class="text-muted">
                          Videos are color-coded by grade. 
                          <span class="text-primary" style="cursor: pointer;" onclick="app.pageModules.videos.filterByGrade('all')">Click a grade to filter</span>, or 
                          <span class="text-primary" style="cursor: pointer;" onclick="app.pageModules.videos.filterByGrade('all')">view all grades</span> for your school level.
                        </small>
                      </div>
                    </div>
                  </div>

                  <!-- Additional Filters -->
                  <div class="row">
                    <div class="col-md-3">
                      <label for="videoSubjectFilter" class="form-label">Subject</label>
                      <select class="form-select" id="videoSubjectFilter" onchange="app.pageModules.videos.filterBySubject(this.value)">
                        <option value="all">All Subjects</option>
                        <option value="English">English</option>
                        <option value="History">History</option>
                        <option value="STEM">STEM</option>
                      </select>
                    </div>
                    <div class="col-md-3">
                      <label for="resourceTypeFilter" class="form-label">Resource Type</label>
                      <select class="form-select" id="resourceTypeFilter" onchange="app.pageModules.videos.filterByResourceType(this.value)">
                        <option value="all">All Types</option>
                        <option value="Tutorial">Tutorial</option>
                        <option value="Lecture">Lecture</option>
                        <option value="Interactive">Interactive</option>
                        <option value="Review">Review</option>
                      </select>
                    </div>
                    <div class="col-md-3">
                      <label for="videoSearchInput" class="form-label">Search</label>
                      <input type="text" class="form-control" id="videoSearchInput" placeholder="Search by subject, topic, or keyword..." onkeyup="app.pageModules.videos.searchVideos(this.value)">
                    </div>
                    <div class="col-md-3">
                      <label for="sortFilter" class="form-label">Sort</label>
                      <select class="form-select" id="sortFilter" onchange="app.pageModules.videos.sortVideos(this.value)">
                        <option value="new">New</option>
                        <option value="old">Oldest</option>
                        <option value="title">Title</option>
                        <option value="duration">Duration</option>
                        <option value="difficulty">Difficulty</option>
                      </select>
                    </div>
                  </div>

                  <!-- Action Buttons and Count -->
                  <div class="row mt-3">
                    <div class="col-md-6">
                      <button class="btn btn-outline-secondary" onclick="app.pageModules.videos.clearAllFilters()">
                        <i class="bi bi-x-circle me-1"></i>Clear All Filters
                      </button>
                    </div>
                    <div class="col-md-6 text-end">
                      <div class="d-flex align-items-center justify-content-end">
                        <i class="bi bi-info-circle text-primary me-2"></i>
                        <small class="text-muted" id="videoCount">Showing 6 of 6 videos</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Videos Grid -->
        <div class="container mb-5">
          <div class="row" id="videosGrid">
            ${this.renderVideosGrid()}
          </div>
        </div>
      </div>
    `;
    
    // Populate grade buttons after rendering
    setTimeout(() => {
      this.populateGradeButtons();
      this.updateVideoCount();
    }, 100);
  }

  populateGradeButtons() {
    const gradeButtonsContainer = document.getElementById('gradeButtons');
    const grades = this.getGradesForSchoolLevel(this.currentSchoolLevel);
    
    gradeButtonsContainer.innerHTML = grades.map(grade => `
      <button class="btn btn-outline-secondary grade-btn" onclick="app.pageModules.videos.filterByGrade('${grade.value}')" id="grade-${grade.value}">
        ${grade.label}
      </button>
    `).join('');
  }

  getGradesForSchoolLevel(schoolLevel) {
    switch(schoolLevel) {
      case 'elementary':
        return [
          { value: 'k', label: 'Kindergarten' },
          { value: '1', label: '1st Grade' },
          { value: '2', label: '2nd Grade' },
          { value: '3', label: '3rd Grade' },
          { value: '4', label: '4th Grade' },
          { value: '5', label: '5th Grade' }
        ];
      case 'middle':
        return [
          { value: '6', label: '6th Grade' },
          { value: '7', label: '7th Grade' },
          { value: '8', label: '8th Grade' }
        ];
      case 'high':
        return [
          { value: '9', label: '9th Grade' },
          { value: '10', label: '10th Grade' },
          { value: '11', label: '11th Grade' },
          { value: '12', label: '12th Grade' }
        ];
      default:
        return [];
    }
  }

  selectSchoolLevel(level) {
    this.currentSchoolLevel = level;
    this.currentGrade = 'all'; // Reset grade when changing school level
    
    // Update button states
    document.querySelectorAll('.school-level-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`${level}Btn`).classList.add('active');
    
    // Update grade buttons
    this.populateGradeButtons();
    
    // Apply filters
    this.applyFilters();
  }

  filterByGrade(grade) {
    this.currentGrade = grade;
    
    // Update grade button states
    document.querySelectorAll('.grade-btn').forEach(btn => btn.classList.remove('active'));
    if (grade !== 'all') {
      const gradeBtn = document.getElementById(`grade-${grade}`);
      if (gradeBtn) {
        gradeBtn.classList.add('active');
      }
    }
    
    // Apply filters
    this.applyFilters();
  }

  filterByResourceType(type) {
    this.currentResourceType = type;
    this.applyFilters();
  }

  sortVideos(sortBy) {
    this.currentSort = sortBy;
    this.applyFilters();
  }

  updateVideoCount() {
    const countElement = document.getElementById('videoCount');
    if (countElement) {
      countElement.textContent = `Showing ${this.filteredVideos.length} of ${this.videos.length} videos`;
    }
  }

  clearAllFilters() {
    this.currentSubject = 'all';
    this.currentGrade = 'all';
    this.currentResourceType = 'all';
    this.currentSort = 'new';
    this.currentSchoolLevel = 'elementary';
    
    // Reset form elements
    document.getElementById('videoSubjectFilter').value = 'all';
    document.getElementById('resourceTypeFilter').value = 'all';
    document.getElementById('videoSearchInput').value = '';
    document.getElementById('sortFilter').value = 'new';
    
    // Reset school level buttons
    document.querySelectorAll('.school-level-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById('elementaryBtn').classList.add('active');
    
    // Reset grade buttons
    document.querySelectorAll('.grade-btn').forEach(btn => btn.classList.remove('active'));
    
    // Update grade buttons for elementary school
    this.populateGradeButtons();
    
    this.applyFilters();
  }

  renderVideosGrid() {
    if (this.filteredVideos.length === 0) {
      return `
        <div class="col-12">
          <div class="text-center py-5">
            <i class="bi bi-search text-muted" style="font-size: 3rem;"></i>
            <h4 class="text-muted mt-3">No videos found</h4>
            <p class="text-muted">Try adjusting your search criteria or browse all videos.</p>
          </div>
        </div>
      `;
    }

    return this.filteredVideos.map(video => `
      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100 video-card">
          <div class="video-thumbnail position-relative">
            <img src="${video.thumbnail}" alt="${video.title}" class="img-fluid video-thumbnail-img" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px 8px 0 0;" 
                 onerror="this.src='${this.getFallbackThumbnail(video)}'">
            <div class="position-absolute top-50 start-50 translate-middle">
              <i class="bi bi-play-circle-fill text-white" style="font-size: 4rem; text-shadow: 2px 2px 4px rgba(0,0,0,0.7);"></i>
            </div>
            <div class="position-absolute top-0 end-0 m-2">
              <span class="badge bg-${video.videoType === 'youtube' ? 'danger' : 'info'}">${video.source}</span>
            </div>
          </div>
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-start mb-2">
              <span class="badge bg-primary">${video.subject}</span>
              <span class="badge bg-secondary">${video.difficulty}</span>
            </div>
            <h5 class="card-title">${video.title}</h5>
            <p class="card-text text-muted small">${video.description}</p>
            <div class="mb-3">
              <small class="text-muted">
                <i class="bi bi-clock me-1"></i>${video.duration} • 
                <i class="bi bi-person me-1"></i>${video.instructor}
              </small>
              ${video.note ? `<br><small class="text-info"><i class="bi bi-info-circle me-1"></i>${video.note}</small>` : ''}
            </div>
          </div>
          <div class="card-footer">
            <button class="btn btn-primary w-100" onclick="app.pageModules.videos.playVideo(${video.id})">
              <i class="bi bi-play-fill me-2"></i>Watch Video
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }

  filterBySubject(subject) {
    this.currentSubject = subject;
    this.applyFilters();
  }

  filterByDifficulty(difficulty) {
    this.currentDifficulty = difficulty;
    this.applyFilters();
  }

  searchVideos(query) {
    this.searchQuery = query.toLowerCase();
    this.applyFilters();
  }

  getFallbackThumbnail(video) {
    // Return relevant fallback images based on video subject and content
    const fallbackImages = {
      // History fallback images
      'History': {
        'Mississippi': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop&crop=center',
        'Civil Rights': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=300&fit=crop&crop=center',
        'Constitution': 'https://images.unsplash.com/photo-1589578527966-fdac0f44566c?w=500&h=300&fit=crop&crop=center',
        'War': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=300&fit=crop&crop=center',
        'default': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop&crop=center'
      },
      // English fallback images
      'English': {
        'Grammar': 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=300&fit=crop&crop=center',
        'Writing': 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&h=300&fit=crop&crop=center',
        'Literature': 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=300&fit=crop&crop=center',
        'Reading': 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=300&fit=crop&crop=center',
        'default': 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=300&fit=crop&crop=center'
      },
      // STEM fallback images
      'STEM': {
        'Math': 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=500&h=300&fit=crop&crop=center',
        'Science': 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=500&h=300&fit=crop&crop=center',
        'Chemistry': 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=500&h=300&fit=crop&crop=center',
        'Physics': 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=500&h=300&fit=crop&crop=center',
        'Biology': 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=300&fit=crop&crop=center',
        'default': 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=500&h=300&fit=crop&crop=center'
      }
    };

    const subjectImages = fallbackImages[video.subject] || fallbackImages['History'];
    
    // Try to match based on title keywords
    const title = video.title.toLowerCase();
    
    if (video.subject === 'History') {
      if (title.includes('mississippi') || title.includes('civil rights') || title.includes('medgar')) {
        return subjectImages['Civil Rights'];
      } else if (title.includes('constitution') || title.includes('bill of rights')) {
        return subjectImages['Constitution'];
      } else if (title.includes('war') || title.includes('battle')) {
        return subjectImages['War'];
      }
    } else if (video.subject === 'English') {
      if (title.includes('grammar') || title.includes('semicolon') || title.includes('comma')) {
        return subjectImages['Grammar'];
      } else if (title.includes('write') || title.includes('essay') || title.includes('paragraph')) {
        return subjectImages['Writing'];
      } else if (title.includes('literature') || title.includes('gatsby') || title.includes('story')) {
        return subjectImages['Literature'];
      } else if (title.includes('reading') || title.includes('comprehension')) {
        return subjectImages['Reading'];
      }
    } else if (video.subject === 'STEM') {
      if (title.includes('math') || title.includes('algebra') || title.includes('geometry') || title.includes('area') || title.includes('perimeter')) {
        return subjectImages['Math'];
      } else if (title.includes('chemistry') || title.includes('nucleus') || title.includes('atom')) {
        return subjectImages['Chemistry'];
      } else if (title.includes('physics') || title.includes('matter') || title.includes('force')) {
        return subjectImages['Physics'];
      } else if (title.includes('biology') || title.includes('pollination') || title.includes('butterfly') || title.includes('life cycle')) {
        return subjectImages['Biology'];
      }
    }
    
    // Return default for the subject
    return subjectImages['default'];
  }

  applyFilters() {
    this.filteredVideos = this.videos.filter(video => {
      const matchesSubject = this.currentSubject === 'all' || video.subject === this.currentSubject;
      const matchesDifficulty = !this.currentDifficulty || this.currentDifficulty === 'all' || video.difficulty === this.currentDifficulty;
      const matchesSearch = !this.searchQuery || 
        video.title.toLowerCase().includes(this.searchQuery) ||
        video.description.toLowerCase().includes(this.searchQuery) ||
        video.instructor.toLowerCase().includes(this.searchQuery);
      const matchesResourceType = this.currentResourceType === 'all' || video.type === this.currentResourceType;
      
      // Handle grade and school level filtering
      let matchesGradeAndSchoolLevel = false;
      if (this.currentGrade !== 'all') {
        // If a specific grade is selected, only show videos for that grade
        matchesGradeAndSchoolLevel = video.grade === this.currentGrade;
      } else {
        // If no specific grade is selected, show videos for the entire school level
        matchesGradeAndSchoolLevel = this.matchesSchoolLevel(video.grade, this.currentSchoolLevel);
      }
      
      return matchesSubject && matchesDifficulty && matchesSearch && matchesResourceType && matchesGradeAndSchoolLevel;
    });
    
    // Apply sorting
    this.sortFilteredVideos();
    
    // Update the videos grid and count
    const grid = document.getElementById('videosGrid');
    if (grid) {
      grid.innerHTML = this.renderVideosGrid();
    }
    this.updateVideoCount();
  }

  matchesSchoolLevel(videoGrade, schoolLevel) {
    // Handle kindergarten as grade 0
    const gradeNum = videoGrade === 'k' ? 0 : parseInt(videoGrade);
    
    switch(schoolLevel) {
      case 'elementary':
        return gradeNum >= 0 && gradeNum <= 5; // K-5
      case 'middle':
        return gradeNum >= 6 && gradeNum <= 8; // 6-8
      case 'high':
        return gradeNum >= 9 && gradeNum <= 12; // 9-12
      default:
        return true;
    }
  }

  sortFilteredVideos() {
    switch(this.currentSort) {
      case 'new':
        this.filteredVideos.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
        break;
      case 'old':
        this.filteredVideos.sort((a, b) => new Date(a.dateAdded) - new Date(b.dateAdded));
        break;
      case 'title':
        this.filteredVideos.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'duration':
        this.filteredVideos.sort((a, b) => this.parseDuration(a.duration) - this.parseDuration(b.duration));
        break;
      case 'difficulty':
        const difficultyOrder = { 'Beginner': 1, 'Intermediate': 2, 'Advanced': 3 };
        this.filteredVideos.sort((a, b) => difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty]);
        break;
    }
  }

  parseDuration(duration) {
    // Convert "41:35" to seconds
    const parts = duration.split(':');
    return parseInt(parts[0]) * 60 + parseInt(parts[1]);
  }

  playVideo(videoId) {
    const video = this.videos.find(v => v.id === videoId);
    if (video) {
      if (video.videoType === 'youtube') {
        this.showYouTubeModal(video);
      } else if (video.videoType === 'external') {
        this.showExternalModal(video);
      } else {
        // Fallback for videos without videoType
        this.showInfoModal(video);
      }
    }
  }

  showYouTubeModal(video) {
    const modalHtml = `
      <div class="modal fade" id="videoModal" tabindex="-1">
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">${video.title}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
              <div class="ratio ratio-16x9 mb-4">
                <iframe 
                  src="https://www.youtube.com/embed/${video.videoId}?autoplay=1&rel=0" 
                  title="${video.title}"
                  frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowfullscreen>
                </iframe>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <p><strong>Subject:</strong> ${video.subject}</p>
                  <p><strong>Duration:</strong> ${video.duration}</p>
                  <p><strong>Difficulty:</strong> ${video.difficulty}</p>
                </div>
                <div class="col-md-6">
                  <p><strong>Instructor:</strong> ${video.instructor}</p>
                  <p><strong>Type:</strong> ${video.type}</p>
                  <p><strong>Grade:</strong> ${video.grade}</p>
                </div>
              </div>
              <div class="mt-3">
                <p><strong>Description:</strong></p>
                <p>${video.description}</p>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    `;
    
    this.showModal(modalHtml);
  }

  showExternalModal(video) {
    const modalHtml = `
      <div class="modal fade" id="videoModal" tabindex="-1">
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">${video.title}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
              <div class="ratio ratio-16x9 mb-4">
                <div class="d-flex flex-column align-items-center justify-content-center h-100" style="background: linear-gradient(135deg, var(--ms-navy), var(--ms-red)); border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
                  <div class="text-center text-white" style="text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">
                    <i class="bi bi-link-45deg" style="font-size: 4rem; margin-bottom: 1rem; color: #fff;"></i>
                    <h4 class="mb-3 fw-bold" style="font-size: 1.5rem; color: #fff;">This video requires an external link</h4>
                    <p class="mb-4" style="font-size: 1.1rem; color: #fff; opacity: 0.95;">Click the button below to watch this video on the original platform</p>
                    <a href="${video.externalUrl}" target="_blank" class="btn btn-light btn-lg fw-bold" style="box-shadow: 0 2px 4px rgba(0,0,0,0.2);">
                      <i class="bi bi-box-arrow-up-right me-2"></i>Watch on ${video.source}
                    </a>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <p><strong>Subject:</strong> ${video.subject}</p>
                  <p><strong>Duration:</strong> ${video.duration}</p>
                  <p><strong>Difficulty:</strong> ${video.difficulty}</p>
                </div>
                <div class="col-md-6">
                  <p><strong>Instructor:</strong> ${video.instructor}</p>
                  <p><strong>Type:</strong> ${video.type}</p>
                  <p><strong>Grade:</strong> ${video.grade}</p>
                </div>
              </div>
              <div class="mt-3">
                <p><strong>Description:</strong></p>
                <p>${video.description}</p>
                ${video.note ? `<div class="alert alert-info mt-3"><i class="bi bi-info-circle me-2"></i>${video.note}</div>` : ''}
                <div class="alert alert-warning mt-3">
                  <i class="bi bi-info-circle me-2"></i>
                  <strong>Note:</strong> This video will open in a new tab on the ${video.source} platform.
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <a href="${video.externalUrl}" target="_blank" class="btn btn-primary">
                <i class="bi bi-box-arrow-up-right me-2"></i>Open in New Tab
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
    
    this.showModal(modalHtml);
  }

  showInfoModal(video) {
    const modalHtml = `
      <div class="modal fade" id="videoModal" tabindex="-1">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">${video.title}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
              <div class="text-center mb-4">
                <div class="video-thumbnail" style="height: 300px; display: flex; align-items: center; justify-content: center; background: linear-gradient(45deg, var(--ms-light-blue), var(--ms-light-red)); border-radius: 10px;">
                  <i class="bi bi-play-circle-fill text-ms-navy" style="font-size: 5rem;"></i>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <p><strong>Subject:</strong> ${video.subject}</p>
                  <p><strong>Duration:</strong> ${video.duration}</p>
                  <p><strong>Difficulty:</strong> ${video.difficulty}</p>
                </div>
                <div class="col-md-6">
                  <p><strong>Instructor:</strong> ${video.instructor}</p>
                  <p><strong>Type:</strong> ${video.type}</p>
                  <p><strong>Grade:</strong> ${video.grade}</p>
                </div>
              </div>
              <div class="mt-3">
                <p><strong>Description:</strong></p>
                <p>${video.description}</p>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    `;
    
    this.showModal(modalHtml);
  }

  showModal(modalHtml) {
    // Remove existing modal if any
    const existingModal = document.getElementById('videoModal');
    if (existingModal) {
      existingModal.remove();
    }
    
    // Add modal to body
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    
    // Show modal
    const modal = new bootstrap.Modal(document.getElementById('videoModal'));
    modal.show();
    
    // Clean up modal when hidden
    document.getElementById('videoModal').addEventListener('hidden.bs.modal', function () {
      this.remove();
    });
  }

  startVideo(videoId) {
    // This will be implemented with actual video integration
    alert(`Starting video ${videoId}. This feature will be implemented with video streaming integration.`);
    
    // Close modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('videoModal'));
    if (modal) {
      modal.hide();
    }
  }
}

// Expose VideosPage class to window for app.js to use
window.VideosPage = VideosPage;