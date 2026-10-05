export const admin = {
    id: 1,
    name: "Admin",
    email: "admin@gmail.com",
    password: "123"
};

export const employees = [
    {
        id: 1,
        name: "Rahul Sharma",
        email: "employee1@gmail.com",
        password: "123",

        totalTask: 2,
        activeTask: 1,
        failedTask: 0,
        completedTask: 1,
        newTask: 1,

        tasks: [
            {
                taskId: 101,
                title: "Complete Dashboard UI",
                description: "Create the admin dashboard interface",
                date: "2026-10-05",
                category: "Development",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                taskId: 102,
                title: "Fix Login Bug",
                description: "Fix authentication issue on login page",
                date: "2026-10-03",
                category: "Bug Fix",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            }
        ]
    },

    {
        id: 2,
        name: "Priya Singh",
        email: "employee2@gmail.com",
        password: "123",

        totalTask: 2,
        activeTask: 1,
        failedTask: 1,
        completedTask: 0,
        newTask: 1,

        tasks: [
            {
                taskId: 201,
                title: "Create User Profile",
                description: "Build the user profile page",
                date: "2026-10-06",
                category: "Frontend",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                taskId: 202,
                title: "Update Documentation",
                description: "Update project documentation",
                date: "2026-10-02",
                category: "Documentation",
                active: false,
                newTask: false,
                completed: false,
                failed: true
            }
        ]
    },

    {
        id: 3,
        name: "Amit Verma",
        email: "employee3@gmail.com",
        password: "123",

        totalTask: 2,
        activeTask: 1,
        failedTask: 0,
        completedTask: 1,
        newTask: 0,

        tasks: [
            {
                taskId: 301,
                title: "API Integration",
                description: "Integrate employee API with frontend",
                date: "2026-10-07",
                category: "Backend",
                active: true,
                newTask: false,
                completed: false,
                failed: false
            },
            {
                taskId: 302,
                title: "Testing",
                description: "Test all application features",
                date: "2026-10-01",
                category: "Testing",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            }
        ]
    },

    {
        id: 4,
        name: "Neha Gupta",
        email: "employee4@gmail.com",
        password: "123",

        totalTask: 2,
        activeTask: 1,
        failedTask: 1,
        completedTask: 0,
        newTask: 1,

        tasks: [
            {
                taskId: 401,
                title: "Create Landing Page",
                description: "Design and develop the landing page",
                date: "2026-10-08",
                category: "Design",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                taskId: 402,
                title: "Optimize Website",
                description: "Improve website performance",
                date: "2026-10-04",
                category: "Optimization",
                active: false,
                newTask: false,
                completed: false,
                failed: true
            }
        ]
    },

    {
        id: 5,
        name: "Vikash Yadav",
        email: "employee5@gmail.com",
        password: "123",

        totalTask: 2,
        activeTask: 1,
        failedTask: 0,
        completedTask: 1,
        newTask: 1,

        tasks: [
            {
                taskId: 501,
                title: "Database Setup",
                description: "Set up the project database",
                date: "2026-10-05",
                category: "Database",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                taskId: 502,
                title: "Deploy Application",
                description: "Deploy the application to production",
                date: "2026-09-30",
                category: "Deployment",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            }
        ]
    }
];

export const setLocalStorage = () => {
    localStorage.setItem("employees", JSON.stringify(employees));
    localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
    const res = localStorage.getItem("employees");
    const dataofemployee = JSON.parse(res);

    const res1 = localStorage.getItem("admin");
    const dataofadmin = JSON.parse(res1);

    return {
        dataofadmin,
        dataofemployee
    };
};