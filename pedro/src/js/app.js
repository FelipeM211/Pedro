// app.js - Main JavaScript file for the Pedro Del Sante Consultoria Médica website

// Global state for the application
const appState = {
    currentUser: null,
    isAdmin: false,
    blogPosts: [],
    editingPost: null
};

// Constants
const USERS_KEY = 'pedro_consultoria_users';
const POSTS_KEY = 'pedro_consultoria_posts';
const ADMIN_EMAIL = 'admin@example.com';
const ADMIN_PASSWORD = 'adminpass123';

// Initialize the application when DOM is fully loaded
document.addEventListener('DOMContentLoaded', initApp);

// Main initialization function
function initApp() {
    // Initialize default data if not present
    initializeData();
    
    // Check if user is already logged in
    checkLoginStatus();
    
    // Setup UI according to page
    setupCurrentPage();
    
    // Add event listener for login button if it exists
    const loginBtn = document.getElementById('login-btn');
    if (loginBtn) {
        loginBtn.addEventListener('click', showLoginModal);
    }
    
    // Update the navbar with user information
    updateNavbar();
}

// Initialize default data in localStorage if not present
function initializeData() {
    // Initialize users if not present
    if (!localStorage.getItem(USERS_KEY)) {
        const defaultUsers = [
            { 
                id: 1, 
                name: 'Administrador', 
                email: ADMIN_EMAIL, 
                password: ADMIN_PASSWORD, 
                isAdmin: true 
            }
        ];
        localStorage.setItem(USERS_KEY, JSON.stringify(defaultUsers));
    }
    
    // Initialize blog posts if not present
    if (!localStorage.getItem(POSTS_KEY)) {
        const defaultPosts = [
            {
                id: 1,
                title: 'Estratégias Eficazes para Crescimento da Carreira Médica',
                content: `<p>O crescimento na carreira médica exige uma abordagem estratégica e multifacetada. Neste artigo, exploramos como médicos podem alavancar sua prática profissional através de networking estratégico, educação continuada e posicionamento digital.</p>
                <p>A medicina contemporânea vai muito além do conhecimento técnico. O profissional que deseja destacar-se precisa desenvolver habilidades complementares como gestão, comunicação e marketing pessoal.</p>
                <h3>Principais pontos para desenvolvimento profissional:</h3>
                <ul>
                    <li>Invest in continued education and specialization in emerging areas</li>
                    <li>Develop your digital presence through specialized content</li>
                    <li>Build strategic relationships with key institutions in your field</li>
                    <li>Implement management practices for optimization of your medical practice</li>
                </ul>
                <p>Lembre-se: sua carreira médica é também um empreendimento que precisa ser gerenciado de forma estratégica e visionária.</p>`,
                author: 'Dr. Pedro Del Sante',
                date: '2024-05-20',
                imageUrl: ''
            },
            {
                id: 2,
                title: 'Como Implementar Telemedicina em Sua Prática Clínica',
                content: `<p>A telemedicina deixou de ser apenas uma tendência para tornar-se uma realidade incontornável na prática médica moderna. Este artigo apresenta um guia prático para médicos que desejam incorporar atendimentos remotos em sua rotina clínica.</p>
                <p>O atendimento via telemedicina possui particularidades que precisam ser consideradas para garantir tanto a qualidade assistencial quanto a proteção legal do profissional.</p>
                <h3>Passos essenciais para implementação:</h3>
                <ol>
                    <li>Escolha de plataforma segura e em conformidade com LGPD</li>
                    <li>Adaptação da documentação clínica para consultas remotas</li>
                    <li>Treinamento da equipe para o novo fluxo de trabalho</li>
                    <li>Comunicação clara com pacientes sobre o novo canal de atendimento</li>
                </ol>
                <p>Quando bem implementada, a telemedicina pode representar não apenas um novo canal de atendimento, mas uma significativa vantagem competitiva para sua prática clínica.</p>`,
                author: 'Dr. Pedro Del Sante',
                date: '2024-05-15',
                imageUrl: ''
            }
        ];
        localStorage.setItem(POSTS_KEY, JSON.stringify(defaultPosts));
    }
}

// Check if a user is already logged in (from localStorage)
function checkLoginStatus() {
    const userData = localStorage.getItem('currentUser');
    if (userData) {
        appState.currentUser = JSON.parse(userData);
        appState.isAdmin = appState.currentUser.isAdmin;
    }
}

// Set up the current page based on URL
function setupCurrentPage() {
    const currentPath = window.location.pathname;
    
    // Handle different pages
    if (currentPath.includes('/admin.html')) {
        setupAdminPage();
    } else if (currentPath.includes('/blog.html')) {
        loadBlogPosts();
    }
}

// Update the navbar with user information
function updateNavbar() {
    const navLinks = document.querySelector('.nav-links');
    
    // If navbar exists
    if (navLinks) {
        // Remove any existing login/logout buttons
        const existingAuthLinks = document.querySelectorAll('.auth-link');
        existingAuthLinks.forEach(link => link.remove());
        
        // Create appropriate authentication links
        if (appState.currentUser) {
            // User is logged in
            
            // Add username display
            const usernameLi = document.createElement('li');
            usernameLi.classList.add('auth-link');
            usernameLi.textContent = `Bem-vindo, ${appState.currentUser.name}`;
            navLinks.appendChild(usernameLi);
            
            // Add admin panel link if user is admin
            if (appState.isAdmin) {
                const adminLi = document.createElement('li');
                adminLi.classList.add('auth-link');
                const adminLink = document.createElement('a');
                adminLink.href = '/src/pages/admin.html';
                adminLink.textContent = 'Admin';
                adminLi.appendChild(adminLink);
                navLinks.appendChild(adminLi);
            }
            
            // Add logout button
            const logoutLi = document.createElement('li');
            logoutLi.classList.add('auth-link');
            const logoutBtn = document.createElement('a');
            logoutBtn.href = '#';
            logoutBtn.textContent = 'Sair';
            logoutBtn.addEventListener('click', logout);
            logoutLi.appendChild(logoutBtn);
            navLinks.appendChild(logoutLi);
        } else {
            // User is not logged in
            const loginLi = document.createElement('li');
            loginLi.classList.add('auth-link');
            const loginBtn = document.createElement('a');
            loginBtn.href = '#';
            loginBtn.id = 'login-btn';
            loginBtn.textContent = 'Login';
            loginBtn.addEventListener('click', showLoginModal);
            loginLi.appendChild(loginBtn);
            navLinks.appendChild(loginLi);
        }
    }
}

// Show the login modal
function showLoginModal() {
    const modal = document.getElementById('login-modal');
    if (modal) {
        modal.style.display = 'flex';
    }
}

// User authentication function
function authenticateUser(email, password) {
    const users = JSON.parse(localStorage.getItem(USERS_KEY));
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        // Store user info in appState and localStorage
        appState.currentUser = user;
        appState.isAdmin = user.isAdmin;
        localStorage.setItem('currentUser', JSON.stringify(user));
        return user;
    }
    
    return null;
}

// Logout function
function logout(e) {
    e.preventDefault();
    
    // Clear user data
    appState.currentUser = null;
    appState.isAdmin = false;
    localStorage.removeItem('currentUser');
    
    // Update navbar
    updateNavbar();
    
    // Redirect to home if on admin page
    if (window.location.pathname.includes('/admin.html')) {
        window.location.href = '/index.html';
    }
}

// Set up the admin page
function setupAdminPage() {
    // Redirect to home if not admin
    if (!appState.isAdmin) {
        window.location.href = '/index.html';
        return;
    }
    
    // Get the container element
    const container = document.querySelector('.container:not(.navbar .container)');
    if (!container) return;
    
    // Clear loading message
    container.innerHTML = '';
    
    // Create admin panel HTML
    container.innerHTML = `
        <div class="admin-container">
            <h1>Painel de Administração</h1>
            
            <div id="post-form-container">
                <h2 id="form-title">Adicionar Novo Post</h2>
                <form id="post-form">
                    <div class="form-group">
                        <label for="post-title">Título</label>
                        <input type="text" id="post-title" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="post-content">Conteúdo</label>
                        <textarea id="post-content" rows="10" required></textarea>
                    </div>
                    
                    <div class="form-buttons">
                        <button type="button" id="cancel-post-btn">Cancelar</button>
                        <button type="submit" id="save-post-btn">Salvar</button>
                    </div>
                </form>
            </div>
            
            <div class="admin-posts">
                <h2>Posts Existentes</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Título</th>
                            <th>Data</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody id="posts-table-body">
                        <!-- Posts will be loaded here -->
                    </tbody>
                </table>
            </div>
        </div>
    `;
    
    // Add event listeners
    document.getElementById('post-form').addEventListener('submit', savePost);
    document.getElementById('cancel-post-btn').addEventListener('click', resetPostForm);
    
    // Load posts into the table
    loadPostsTable();
}

// Load blog posts for the admin panel table
function loadPostsTable() {
    const tableBody = document.getElementById('posts-table-body');
    if (!tableBody) return;
    
    // Clear existing rows
    tableBody.innerHTML = '';
    
    // Get posts from localStorage
    const posts = JSON.parse(localStorage.getItem(POSTS_KEY) || '[]');
    appState.blogPosts = posts;
    
    // Add post rows
    posts.forEach(post => {
        const row = document.createElement('tr');
        
        // Format date
        const dateObj = new Date(post.date);
        const formattedDate = dateObj.toLocaleDateString('pt-BR');
        
        row.innerHTML = `
            <td>${post.title}</td>
            <td>${formattedDate}</td>
            <td>
                <button class="edit-post-btn" data-id="${post.id}">Editar</button>
                <button class="delete-post-btn" data-id="${post.id}">Excluir</button>
            </td>
        `;
        
        tableBody.appendChild(row);
    });
    
    // Add event listeners for edit and delete buttons
    document.querySelectorAll('.edit-post-btn').forEach(btn => {
        btn.addEventListener('click', () => editPost(parseInt(btn.dataset.id)));
    });
    
    document.querySelectorAll('.delete-post-btn').forEach(btn => {
        btn.addEventListener('click', () => deletePost(parseInt(btn.dataset.id)));
    });
}

// Save a post (create new or update existing)
function savePost(e) {
    e.preventDefault();
    
    // Get form data
    const title = document.getElementById('post-title').value;
    const content = document.getElementById('post-content').value;
    
    // Get existing posts
    const posts = JSON.parse(localStorage.getItem(POSTS_KEY) || '[]');
    
    if (appState.editingPost) {
        // Update existing post
        const postIndex = posts.findIndex(p => p.id === appState.editingPost);
        if (postIndex !== -1) {
            posts[postIndex].title = title;
            posts[postIndex].content = content;
            posts[postIndex].date = new Date().toISOString().split('T')[0]; // Update date
        }
    } else {
        // Create new post
        const newPost = {
            id: posts.length ? Math.max(...posts.map(p => p.id)) + 1 : 1,
            title,
            content,
            author: appState.currentUser ? appState.currentUser.name : 'Admin',
            date: new Date().toISOString().split('T')[0],
            imageUrl: ''
        };
        
        posts.push(newPost);
    }
    
    // Save updated posts
    localStorage.setItem(POSTS_KEY, JSON.stringify(posts));
    appState.blogPosts = posts;
    
    // Reset form and reload table
    resetPostForm();
    loadPostsTable();
}

// Edit a post
function editPost(postId) {
    const posts = JSON.parse(localStorage.getItem(POSTS_KEY) || '[]');
    const post = posts.find(p => p.id === postId);
    
    if (post) {
        // Set form data
        document.getElementById('post-title').value = post.title;
        document.getElementById('post-content').value = post.content;
        
        // Update form title
        document.getElementById('form-title').textContent = 'Editar Post';
        
        // Set editing state
        appState.editingPost = postId;
        
        // Scroll to form
        document.getElementById('post-form-container').scrollIntoView();
    }
}

// Delete a post
function deletePost(postId) {
    if (confirm('Tem certeza que deseja excluir este post?')) {
        // Get posts and filter out the one to delete
        const posts = JSON.parse(localStorage.getItem(POSTS_KEY) || '[]');
        const updatedPosts = posts.filter(p => p.id !== postId);
        
        // Save updated posts
        localStorage.setItem(POSTS_KEY, JSON.stringify(updatedPosts));
        appState.blogPosts = updatedPosts;
        
        // Reload table
        loadPostsTable();
    }
}

// Reset the post form
function resetPostForm() {
    document.getElementById('post-form').reset();
    document.getElementById('form-title').textContent = 'Adicionar Novo Post';
    appState.editingPost = null;
}

// Load blog posts for the blog page
function loadBlogPosts() {
    const postsContainer = document.querySelector('.blog-posts');
    if (!postsContainer) return;
    
    // Clear loading message
    postsContainer.innerHTML = '';
    
    // Get posts from localStorage
    const posts = JSON.parse(localStorage.getItem(POSTS_KEY) || '[]');
    appState.blogPosts = posts;
    
    if (posts.length === 0) {
        postsContainer.innerHTML = '<p>Nenhum post disponível no momento.</p>';
        return;
    }
    
    // Sort posts by date (newest first)
    posts.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    // Add posts to container
    posts.forEach(post => {
        const article = document.createElement('article');
        article.classList.add('post');
        
        // Format date
        const dateObj = new Date(post.date);
        const formattedDate = dateObj.toLocaleDateString('pt-BR');
        
        // Create content snippet
        const contentDiv = document.createElement('div');
        contentDiv.innerHTML = post.content;
        const textContent = contentDiv.textContent;
        const snippet = textContent.length > 150 ? textContent.substring(0, 150) + '...' : textContent;
        
        article.innerHTML = `
            <h2>${post.title}</h2>
            <div class="post-meta">
                <span class="post-author">Por ${post.author}</span>
                <span class="post-date">${formattedDate}</span>
            </div>
            <div class="post-content-preview">
                <p>${snippet}</p>
            </div>
            <a href="#" class="read-more" data-id="${post.id}">Ler mais</a>
        `;
        
        postsContainer.appendChild(article);
    });
    
    // Add event listeners for "read more" links
    document.querySelectorAll('.read-more').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            showFullPost(parseInt(link.dataset.id));
        });
    });
}

// Show full blog post
function showFullPost(postId) {
    const post = appState.blogPosts.find(p => p.id === postId);
    if (!post) return;
    
    const postsContainer = document.querySelector('.blog-posts');
    if (!postsContainer) return;
    
    // Format date
    const dateObj = new Date(post.date);
    const formattedDate = dateObj.toLocaleDateString('pt-BR');
    
    // Save current scroll position
    const scrollPos = window.scrollY;
    
    // Clear container and show full post
    postsContainer.innerHTML = `
        <article class="full-post">
            <a href="#" class="back-to-posts">&larr; Voltar para o blog</a>
            <h2>${post.title}</h2>
            <div class="post-meta">
                <span class="post-author">Por ${post.author}</span>
                <span class="post-date">${formattedDate}</span>
            </div>
            <div class="post-content">
                ${post.content}
            </div>
        </article>
    `;
    
    // Add event listener for back button
    document.querySelector('.back-to-posts').addEventListener('click', (e) => {
        e.preventDefault();
        loadBlogPosts();
        
        // Restore scroll position
        window.scrollTo(0, scrollPos);
    });
    
    // Scroll to top
    window.scrollTo(0, 0);
}