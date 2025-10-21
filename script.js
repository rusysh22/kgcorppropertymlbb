// KG CORPORATE/PROPERTY MLBB Tournament Website
// Gaming - Interactive Tournament Website

document.addEventListener('DOMContentLoaded', () => {
    // ========================
    // Configuration & Data
    // ========================
    
    // Sample data - matches with live status for match 1 and 2, and upcoming matches scheduled from Oct 21-24, 2025
    const matches = [
        { id: 1, team1: 'ENG', team2: 'AUDIT', status: 'completed', date: '2025-01-20', time: '17:00', score: { team1: 0, team2: 2 }, winner: 'AUDIT', completed: true },
        { id: 2, team1: 'CITIS', team2: 'ACC/TAX/FSD', status: 'completed', date: '2025-01-20', time: '17:30', score: { team1: 0, team2: 0 }, winner: null, completed: true },
        { id: 3, team1: 'CFP', team2: 'ENG', status: 'upcoming', date: '2025-10-21', time: '17:00', score: null, winner: null, completed: false },
        { id: 4, team1: 'CFP', team2: 'CITIS', status: 'upcoming', date: '2025-10-21', time: '18:00', score: null, winner: null, completed: false },
        { id: 5, team1: 'ACC/TAX/FSD', team2: 'AUDIT', status: 'upcoming', date: '2025-10-22', time: '17:00', score: null, winner: null, completed: false },
        { id: 6, team1: 'ENG', team2: 'CITIS', status: 'upcoming', date: '2025-10-22', time: '17:00', score: null, winner: null, completed: false },
        { id: 7, team1: 'CFP', team2: 'ACC/TAX/FSD', status: 'upcoming', date: '2025-10-23', time: '17:00', score: null, winner: null, completed: false },
        { id: 8, team1: 'AUDIT', team2: 'CITIS', status: 'upcoming', date: '2025-10-23', time: '17:00', score: null, winner: null, completed: false },
        { id: 9, team1: 'ENG', team2: 'ACC/TAX/FSD', status: 'upcoming', date: '2025-10-24', time: '17:00', score: null, winner: null, completed: false },
        { id: 10, team1: 'CFP', team2: 'AUDIT', status: 'upcoming', date: '2025-10-24', time: '17:00', score: null, winner: null, completed: false },
    ];
    
    const teamsData = {
        'ENG': { 
            players: ['JavFlo', 'Gedan Barai', 'AanZ', 'Tiga Kilo', 'LoGue_end', '[ATHENA]*Hunterz', 'Koinzeel*', 'Swepeer14', 'lupus'],
            color: '#00ffff',
            contact: { name: 'Niko', phone: '+62 812-1283-5637' }
        },
        'CFP': { 
            players: ['Shubkhi', 'zemos', 'Wally', 'Cloe', 'Exodus', 'DougyMandagri'],
            color: '#ff00ff',
            contact: { name: 'Dani', phone: '+62 823-3156-5773' }
        },
        'CITIS': { 
            players: ['IngusPenguin', '-dominic', 'Bita_1114', 'canonball', 'tas.gemblok', 'Fifi', 'Titus'],
            color: '#ffff00',
            contact: { name: 'Dinda', phone: '+62 857-1895-6130' }
        },
        'ACC/TAX/FSD': { 
            players: ['RainyCry-ING', 'Na0mi Tier 1A.', 'b i a w a k', 'totensman', 'lordjuicy', 'Inola', 'el pablo', 'dandelions'],
            color: '#ff5733',
            contact: { name: 'Yori', phone: '+62 877-7556-8776' }
        },
        'AUDIT': { 
            players: ['Superjorrr (cici)', 'Iyelito', 'Koro', 'SquishyJorr', 'Na0mi Tier 1A.'],
            color: '#33ff57',
            contact: { name: 'Yoga', phone: '+62 838-1672-7039' }
        }
    };

    // ========================
    // DOM Elements
    // ========================
    
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const starsContainer = document.getElementById('stars');
    const particlesContainer = document.getElementById('particles-js');

    // ========================
    // Navigation Functions
    // ========================
    
    // Initialize navigation menu toggle
    function initNavigation() {
        if (hamburger && navMenu) {
            hamburger.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                hamburger.classList.toggle('active');
            });
            
            // Close menu when clicking on a link
            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => {
                    navMenu.classList.remove('active');
                    hamburger.classList.remove('active');
                });
            });
            
            // Close menu when clicking outside of it
            document.addEventListener('click', (event) => {
                if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
                    navMenu.classList.remove('active');
                    hamburger.classList.remove('active');
                }
            });
        }
    }
    
    // Scroll spy for active navigation
    function initScrollSpy() {
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('.section');
            const navLinks = document.querySelectorAll('.nav-link');
            
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(current)) {
                    link.classList.add('active');
                }
            });
        });
    }
    
    // Smooth scrolling for anchor links
    function initSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
    
    // Tab functionality for schedule
    function initTabs() {
        const tabBtns = document.querySelectorAll('.tab-btn');
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const tabId = btn.getAttribute('data-tab');
                
                // Remove active class from all buttons and content
                document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
                
                // Add active class to clicked button and corresponding content
                btn.classList.add('active');
                document.getElementById(`${tabId}-tab`).classList.add('active');
            });
        });
    }

    // ========================
    // Data Processing Functions
    // ========================
    
    // Calculate standings
    function calculateStandings(matches) {
        const teams = {};
        
        // Initialize teams with zero values
        Object.keys(teamsData).forEach(teamName => {
            teams[teamName] = {
                name: teamName,
                wins: 0,
                losses: 0,
                draws: 0,
                played: 0,
                points: 0,
                form: [] // Last 5 matches
            };
        });
        
        // Process completed matches to update standings
        matches.forEach(match => {
            if (match.completed && match.score !== null) {
                const { team1, team2, score, winner } = match;
                
                if (teams[team1] && teams[team2]) {
                    // Update played matches
                    teams[team1].played++;
                    teams[team2].played++;
                    
                    // Update form (add result to form array)
                    if (winner === team1) {
                        teams[team1].form.push('W');
                        teams[team2].form.push('L');
                        teams[team1].wins++;
                        teams[team2].losses++;
                        teams[team1].points += 3; // 3 points for win
                    } else if (winner === team2) {
                        teams[team2].form.push('W');
                        teams[team1].form.push('L');
                        teams[team2].wins++;
                        teams[team1].losses++;
                        teams[team2].points += 3; // 3 points for win
                    } else if (match.status === 'completed' && winner === null) {
                        // Draw case
                        teams[team1].form.push('D');
                        teams[team2].form.push('D');
                        teams[team1].draws++;
                        teams[team2].draws++;
                        teams[team1].points += 1;
                        teams[team2].points += 1;
                    }
                    
                    // Keep only last 5 matches in form
                    if (teams[team1].form.length > 5) {
                        teams[team1].form.shift();
                    }
                    if (teams[team2].form.length > 5) {
                        teams[team2].form.shift();
                    }
                }
            }
        });
        
        // Convert to array and sort by points, then by wins
        return Object.values(teams).sort((a, b) => 
            b.points - a.points || 
            b.wins - a.wins
        );
    }

    // ========================
    // Rendering Functions
    // ========================
    
    // Render schedule
    function renderSchedule() {
        // Get today's date in YYYY-MM-DD format
        const today = new Date();
        const todayStr = today.toISOString().split('T')[0]; // Format as YYYY-MM-DD
        
        // Get upcoming matches (not live or completed and not for today) and sort by date (earliest first)
        const upcomingMatches = matches
            .filter(match => match.status === 'upcoming' && match.date !== todayStr)
            .sort((a, b) => new Date(a.date) - new Date(b.date));
            
        // Get completed matches and sort by date (most recent first)
        const completedMatches = matches
            .filter(match => match.completed)
            .sort((a, b) => new Date(b.date) - new Date(a.date));

        const upcomingContainer = document.querySelector('#upcoming-tab .schedule-grid');
        const completedContainer = document.querySelector('#completed-tab .schedule-grid');

        if (upcomingContainer) {
            upcomingContainer.innerHTML = '';
            upcomingMatches.forEach(match => {
                const matchCard = document.createElement('div');
                matchCard.classList.add('match-card');
                matchCard.innerHTML = `
                    <div class="match-header">
                        <span class="match-status">UPCOMING</span>
                        <div class="match-time">${match.date} ${match.time}</div>
                    </div>
                    <div class="match-teams">
                        <div class="team team-left">
                            <div class="team-info">
                                <h3>${match.team1}</h3>
                            </div>
                        </div>
                        <div class="vs">VS</div>
                        <div class="team team-right">
                            <div class="team-info">
                                <h3>${match.team2}</h3>
                            </div>
                        </div>
                    </div>
                    <div class="match-details">
                        <p><i class="fas fa-calendar"></i> ${match.date} at ${match.time}</p>
                    </div>
                `;
                upcomingContainer.appendChild(matchCard);
            });
        }

        if (completedContainer) {
            completedContainer.innerHTML = '';
            completedMatches.forEach(match => {
                const matchCard = document.createElement('div');
                matchCard.classList.add('match-card');

                matchCard.innerHTML = `
                    <div class="match-header">
                        <span class="match-status">COMPLETED</span>
                        <div class="match-time">Completed</div>
                    </div>
                    <div class="match-teams">
                        <div class="team team-left ${match.winner === match.team1 ? 'match-winner' : ''}">
                            <div class="team-info">
                                <h3>${match.team1}</h3>
                            </div>
                            <div class="team-score">
                                <span class="score">${match.score.team1}</span>
                            </div>
                        </div>
                        <div class="vs">VS</div>
                        <div class="team team-right ${match.winner === match.team2 ? 'match-winner' : ''}">
                            <div class="team-score">
                                <span class="score">${match.score.team2}</span>
                            </div>
                            <div class="team-info">
                                <h3>${match.team2}</h3>
                            </div>
                        </div>
                    </div>
                    <div class="match-result-actions">
                        <button class="view-result-btn" data-match-id="${match.id}">View Result</button>
                    </div>
                    <div class="match-details">
                        <p><i class="fas fa-trophy"></i> Winner: ${match.winner || 'Draw'}</p>
                        <p><i class="fas fa-calendar"></i> ${match.date} at ${match.time}</p>
                    </div>
                `;
                completedContainer.appendChild(matchCard);
            });
        }
    }
    
    // Render results
    function renderResults() {
        // Get completed matches and sort them by date (most recent first)
        const completedMatches = matches
            .filter(match => match.completed)
            .sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by date descending

        const resultsContainer = document.querySelector('.results-grid');

        if (resultsContainer) {
            resultsContainer.innerHTML = '<p class="no-results">No results yet. Check back after matches are completed.</p>';
        }
    }
    
    // Render leaderboard
    function renderLeaderboard() {
        const standings = calculateStandings(matches);
        const leaderboardBody = document.querySelector('.leaderboard-table tbody');

        if (leaderboardBody) {
            leaderboardBody.innerHTML = '';

            standings.forEach((team, index) => {
                const row = document.createElement('tr');

                // Format form string (show last 5 matches)
                let formString = '';
                if (team.form.length > 0) {
                    formString = team.form.join(' ');
                } else {
                    formString = 'N/A';
                }

                // Calculate total matches played
                const played = team.wins + team.losses + team.draws;

                // Create form indicators HTML using colored circles
                let formIndicators = '';
                if (team.form.length > 0) {
                    formIndicators = team.form.map(result => {
                        if (result === 'W') {
                            return '<span class="form-win" title="Win"></span>';
                        } else if (result === 'L') {
                            return '<span class="form-loss" title="Loss"></span>';
                        } else if (result === 'D') {
                            return '<span class="form-draw" title="Draw"></span>';
                        }
                        return '';
                    }).join('');
                } else {
                    formIndicators = 'N/A';
                }

                row.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${team.name}</td>
                    <td>${played}</td>
                    <td>${team.wins}</td>
                    <td>${team.draws}</td>
                    <td>${team.losses}</td>
                    <td>${team.points}</td>
                    <td>${formIndicators}</td>
                `;
                leaderboardBody.appendChild(row);
            });
        }
    }
    
    // Render teams
    function renderTeams() {
        const teamsContainer = document.querySelector('.teams-grid');
        const modal = document.querySelector('.team-detail-modal');
        const modalContent = document.querySelector('.team-detail-content');
        const closeModal = document.querySelector('.close-modal');

        if (teamsContainer) {
            teamsContainer.innerHTML = '';

            Object.keys(teamsData).forEach(teamName => {
                const team = teamsData[teamName];
                const teamCard = document.createElement('div');
                teamCard.classList.add('team-card');

                // Format phone number for WhatsApp API (remove spaces, dashes, and add country code)
                const cleanPhone = team.contact.phone.replace(/[^0-9]/g, '');
                const waLink = `https://wa.me/${cleanPhone}`;

                // Generate player list for team card (no animation)
                const playerList = team.players.map(player => {
                    return `<li title="${player}">${player}</li>`;
                }).join('');

                teamCard.innerHTML = `
                    <h3>${teamName}</h3>
                    <p class="team-stats">${team.players.length} Players</p>
                    <p class="team-contact"><strong>Contact:</strong> <a href="${waLink}" target="_blank">${team.contact.name}</a> (${team.contact.phone})</p>
                    <ul>
                        ${playerList}
                    </ul>
                `;

                teamCard.addEventListener('click', () => {
                    // Format phone number for WhatsApp API (remove spaces, dashes, and add country code)
                    const cleanPhone = team.contact.phone.replace(/[^0-9]/g, '');
                    const waLink = `https://wa.me/${cleanPhone}`;

                    // Generate player list with animation for long names in modal
                    const playerModalList = team.players.map(player => {
                        const isLongName = player.length > 15; // Consider names longer than 15 chars as long
                        if (isLongName) {
                            return `<li class="player-item long-name"><span>${player}</span></li>`;
                        } else {
                            return `<li class="player-item">${player}</li>`;
                        }
                    }).join('');

                    modalContent.innerHTML = `
                        <h2>${teamName}</h2>
                        <div class="team-detail-stats">Players (${team.players.length})</div>
                        <div class="team-detail-contact">
                            <h3>Contact: ${team.contact.name}</h3>
                            <p>
                                <a href="${waLink}" class="wa-button" target="_blank">
                                    <i class="fab fa-whatsapp"></i> Chat on WhatsApp
                                </a>
                            </p>
                        </div>
                        <div class="players-list">
                            <h3>Players List</h3>
                            <ul class="player-grid">
                                ${playerModalList}
                            </ul>
                        </div>
                    `;
                    modal.classList.add('active');
                });

                teamsContainer.appendChild(teamCard);
            });
        }

        // Close modal functionality
        if (closeModal) {
            closeModal.addEventListener('click', () => {
                modal.classList.remove('active');
            });
        }

        // Close modal when clicking outside of content
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.classList.remove('active');
                }
            });
        }
    }

    // ========================
    // Visual Effects & Animations
    // ========================
    
    // Create animated stars background
    function createStars() {
        if (starsContainer) {
            for (let i = 0; i < 150; i++) {
                const star = document.createElement('div');
                star.classList.add('star');
                star.style.width = `${Math.random() * 3}px`;
                star.style.height = star.style.width;
                star.style.top = `${Math.random() * 100}%`;
                star.style.left = `${Math.random() * 100}%`;
                star.style.animationDelay = `${Math.random() * 3}s`;
                star.style.opacity = Math.random() * 0.8 + 0.2;
                starsContainer.appendChild(star);
            }
        }
    }
    
    // Initialize particles.js if the library is loaded
    function initParticles() {
        if (particlesContainer && typeof particlesJS !== 'undefined') {
            particlesJS('particles-js', {
                particles: {
                    number: {
                        value: 80,
                        density: {
                            enable: true,
                            value_area: 800
                        }
                    },
                    color: {
                        value: '#00ffff'
                    },
                    shape: {
                        type: 'circle',
                        stroke: {
                            width: 0,
                            color: '#000000'
                        }
                    },
                    opacity: {
                        value: 0.5,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 1,
                            opacity_min: 0.1,
                            sync: false
                        }
                    },
                    size: {
                        value: 3,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 2,
                            size_min: 0.3,
                            sync: false
                        }
                    },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: '#00ffff',
                        opacity: 0.4,
                        width: 1
                    },
                    move: {
                        enable: true,
                        speed: 1,
                        direction: 'none',
                        random: true,
                        straight: false,
                        out_mode: 'out',
                        bounce: false
                    }
                },
                interactivity: {
                    detect_on: 'canvas',
                    events: {
                        onhover: {
                            enable: true,
                            mode: 'repulse'
                        },
                        onclick: {
                            enable: true,
                            mode: 'push'
                        },
                        resize: true
                    }
                },
                retina_detect: true
            });
        } else {
            // Fallback: create simple particles with plain JavaScript
            createSimpleParticles();
        }
    }
    
    // Create simple particles as fallback
    function createSimpleParticles() {
        // Not implemented in this version - would require additional code
    }
    
    // Add countdown for upcoming matches
    function addCountdowns() {
        // Find upcoming matches and add countdowns to their timers
        const upcomingMatches = matches.filter(match => !match.completed);

        upcomingMatches.forEach(match => {
            const matchElement = document.querySelector(`[data-match-id="${match.id}"]`);
            if (matchElement) {
                const countdownElement = matchElement.querySelector('.match-time');
                if (countdownElement) {
                    updateCountdown(match, countdownElement);
                    // Update every minute
                    setInterval(() => updateCountdown(match, countdownElement), 60000);
                }
            }
        });
    }
    
    // Update countdown for a specific match
    function updateCountdown(match, element) {
        if (!element) return;

        const matchDateTime = new Date(`${match.date} ${match.time}`);
        const now = new Date();
        const diff = matchDateTime - now;

        if (diff > 0) {
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

            element.textContent = `${days}d ${hours}h ${minutes}m`;
        } else {
            element.textContent = 'LIVE';
        }
    }
    
    // Update live matches display - Updated to show today's matches
    function updateLiveMatches() {
        // Get today's date in YYYY-MM-DD format
        const today = new Date();
        const todayStr = today.toISOString().split('T')[0]; // Format as YYYY-MM-DD
        
        // Filter matches for today's date (including both upcoming and live matches)
        const todayMatches = matches.filter(match => match.date === todayStr);
        
        const liveMatchContainer = document.querySelector('.matches-container');

        if (liveMatchContainer) {
            liveMatchContainer.innerHTML = '';

            if (todayMatches.length === 0) {
                liveMatchContainer.innerHTML = '<p class="no-results">No matches scheduled for today. Check back soon!</p>';
                return;
            }

            todayMatches.forEach(match => {
                const matchCard = document.createElement('div');
                matchCard.classList.add('match-card', 'live-match');

                // Set default scores if match doesn't have a score yet
                const team1Score = match.score && match.score.team1 !== undefined ? match.score.team1 : '0';
                const team2Score = match.score && match.score.team2 !== undefined ? match.score.team2 : '0';

                matchCard.innerHTML = `
                    <div class="match-header">
                        <span class="match-status live">TODAY</span>
                        <span class="match-timer">${match.time}</span>
                    </div>
                    <div class="match-teams">
                        <div class="team team-left">
                            <div class="team-info">
                                <h3>${match.team1}</h3>
                            </div>
                            <div class="team-score">
                                <span class="score">${team1Score}</span>
                            </div>
                        </div>
                        <div class="vs">VS</div>
                        <div class="team team-right">
                            <div class="team-score">
                                <span class="score">${team2Score}</span>
                            </div>
                            <div class="team-info">
                                <h3>${match.team2}</h3>
                            </div>
                        </div>
                    </div>
                `;

                liveMatchContainer.appendChild(matchCard);
            });
        }
    }

    // Add animation when elements come into view
    function initIntersectionObserver() {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe elements to animate when they come into view
        document.querySelectorAll('.match-card, .team-card, .stat').forEach(el => {
            observer.observe(el);
        });
    }

    // ========================
    // Image Gallery Functions
    // ========================
    
    // Function to show image grid for a specific match
    function showMatchImageGrid(matchId, button) {
        console.log('showMatchImageGrid called for matchId:', matchId);

        // Find the match by ID
        const match = matches.find(m => m.id === matchId);
        if (!match) {
            console.log('Match not found for ID:', matchId);
            return;
        }

        const matchCard = button.closest('.match-card');
        if (!matchCard) {
            console.log('Match card not found for button');
            return;
        }

        // Create or update the image grid container right after the button
        let gridContainer = document.getElementById(`match-image-grid-${matchId}`);

        if (!gridContainer) {
            // Create the grid container
            gridContainer = document.createElement('div');
            gridContainer.id = `match-image-grid-${matchId}`;
            gridContainer.className = 'match-image-grid';
            gridContainer.style.display = 'none'; // Initially hidden

            // Insert after the match card element
            matchCard.parentNode.insertBefore(gridContainer, matchCard.nextSibling);
        }

        // Load images into the grid container
        if (gridContainer) {
            // Clear previous images only if it's empty
            if (!gridContainer.hasChildNodes()) {
                gridContainer.innerHTML = '<p class="loading-message">Loading images...</p>';

                const imagePrefix = `src/img/id ${matchId} -`; // Corrected path

                let imagesLoaded = 0; // Counter for successfully loaded images
                const loadedImages = []; // Store loaded images to append all at once later

                // Check for multiple images (a, b, c, etc.)
                const possibleSuffixes = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

                // Try to load images with different suffixes
                possibleSuffixes.forEach(suffix => {
                    const imagePath = `${imagePrefix}${suffix}.jpg`;

                    // Create image element and try to load
                    const img = new Image(); // Using Image constructor for better error handling
                    img.src = imagePath;

                    img.onload = function() {
                        const thumbContainer = document.createElement('div');
                        thumbContainer.className = 'image-thumb-container';
                        
                        const label = document.createElement('div');
                        label.className = 'image-label';
                        label.textContent = `Match ${suffix.toUpperCase()}`;
                        
                        const thumbImg = document.createElement('img');
                        thumbImg.src = imagePath;
                        thumbImg.alt = `Match ${matchId} Image ${suffix}`;
                        thumbImg.title = `Match ${matchId} Image ${suffix}`;
                        thumbImg.className = 'image-thumbnail';

                        thumbImg.addEventListener('click', function() {
                            showImagePreview(imagePath, `Match ${matchId} - Image ${suffix}`);
                        });

                        thumbContainer.appendChild(label);
                        thumbContainer.appendChild(thumbImg);
                        loadedImages.push(thumbContainer);
                        updateGridContainer();
                        imagesLoaded++;
                        console.log(`Successfully loaded image: ${imagePath}`);
                    };

                    img.onerror = function() {
                        console.log(`Failed to load image: ${imagePath}`);
                        updateGridContainer();
                    };
                });

                function updateGridContainer() {
                    // A short delay to allow multiple images to process
                    setTimeout(() => {
                        if (loadedImages.length > 0) {
                            gridContainer.innerHTML = '';
                            loadedImages.forEach(imgContainer => {
                                gridContainer.appendChild(imgContainer);
                            });
                        } else {
                            gridContainer.innerHTML = '<p class="no-images-message">No result images available for this match.</p>';
                        }
                    }, 200);
                }
            }

            // Show the grid container
            gridContainer.style.display = 'block';
            const allButtons = document.querySelectorAll(`.view-result-btn[data-match-id="${matchId}"]`);
            allButtons.forEach(btn => {
                btn.textContent = 'Hide Result';
                btn.setAttribute('data-expanded', 'true');
            });
        }
    }

    // Function to hide the image grid
    function hideMatchImageGrid(matchId) {
        const gridContainer = document.getElementById(`match-image-grid-${matchId}`);
        if (gridContainer) {
            gridContainer.style.display = 'none';
        }

        // Update all buttons for this match
        const allButtons = document.querySelectorAll(`.view-result-btn[data-match-id="${matchId}"]`);
        allButtons.forEach(button => {
            button.textContent = 'View Result';
            button.setAttribute('data-expanded', 'false');
        });
    }

    // Function to toggle the image grid
    function toggleMatchImageGrid(matchId, button) {
        const gridContainer = document.getElementById(`match-image-grid-${matchId}`);
        if (gridContainer && gridContainer.style.display !== 'none') {
            hideMatchImageGrid(matchId);
        } else {
            showMatchImageGrid(matchId, button);
        }
    }

    // Function to show image preview in a large format
    function showImagePreview(imageSrc, imageTitle) {
        // Remove any existing preview
        const existingPreview = document.querySelector('.image-preview-overlay');
        if (existingPreview) {
            existingPreview.remove();
        }

        // Create preview overlay
        const overlay = document.createElement('div');
        overlay.className = 'image-preview-overlay';

        // Create preview content
        const previewContent = document.createElement('div');
        previewContent.className = 'image-preview-content';

        // Create large image
        const largeImg = document.createElement('img');
        largeImg.src = imageSrc;
        largeImg.alt = imageTitle;
        largeImg.className = 'large-preview-image';

        // Create title
        const title = document.createElement('h3');
        title.textContent = imageTitle;
        title.className = 'preview-title';

        // Create close button
        const closeBtn = document.createElement('span');
        closeBtn.className = 'preview-close';
        closeBtn.innerHTML = '&times;';
        closeBtn.title = 'Close';

        // Add elements to preview content
        previewContent.appendChild(closeBtn);
        previewContent.appendChild(title);
        previewContent.appendChild(largeImg);
        overlay.appendChild(previewContent);

        // Add to document
        document.body.appendChild(overlay);

        // Add event listeners
        closeBtn.addEventListener('click', function() {
            overlay.remove();
        });

        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) {
                overlay.remove();
            }
        });
    }

    // Add event listeners to view result buttons
    function addViewResultButtonListeners() {
        console.log('Initializing button listeners...');
        // Use event delegation to handle dynamically added buttons
        document.addEventListener('click', function(e) {
            if (e.target.classList.contains('view-result-btn')) {
                console.log('View Result button clicked');
                const matchId = parseInt(e.target.getAttribute('data-match-id'));
                console.log('Match ID from button:', matchId);
                if (matchId) {
                    toggleMatchImageGrid(matchId, e.target);
                }
            }
        });
    }

    // ========================
    // Initialization
    // ========================
    
    // Initialize all components
    function initApp() {
        initNavigation();
        initScrollSpy();
        initSmoothScrolling();
        initTabs();
        renderSchedule();
        renderResults();
        renderLeaderboard();
        renderTeams();
        updateLiveMatches();
        createStars();
        initParticles();
        addViewResultButtonListeners();
        initIntersectionObserver();
    }

    // Initialize the app after DOM is loaded
    initApp();
    
    // Initialize local time display
    function updateLocalTime() {
        const now = new Date();
        // Format time in 24-hour format with WIB timezone
        const options = {
            hour: '2-digit',
            minute: '2-digit', 
            second: '2-digit',
            hour12: false, // Use 24-hour format
            timeZone: 'Asia/Jakarta' // WIB timezone
        };
        const timeString = now.toLocaleTimeString('id-ID', options);
        const timeElement = document.getElementById('timeText');
        if (timeElement) {
            timeElement.textContent = `${timeString} WIB`;
        }
    }
    
    // Update time immediately
    updateLocalTime();
    
    // Update time every second
    setInterval(updateLocalTime, 1000);



    // Update results section to show completed matches
    setTimeout(() => {
        const resultsContainer = document.querySelector('.results-grid');
        if (resultsContainer) {
            // Get completed matches from the global matches array
            const completedMatches = matches
                .filter(match => match.completed)
                .sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by date descending

            if (completedMatches.length > 0) {
                resultsContainer.innerHTML = '';

                completedMatches.forEach(match => {
                    const resultCard = document.createElement('div');
                    resultCard.classList.add('match-card');

                    resultCard.innerHTML = `
                        <div class="match-header">
                            <span class="match-status">COMPLETED</span>
                            <div class="match-time">${match.date}</div>
                        </div>
                        <div class="match-teams">
                            <div class="team team-left ${match.winner === match.team1 ? 'match-winner' : ''}">
                                <div class="team-info">
                                    <h3>${match.team1}</h3>
                                </div>
                                <div class="team-score">
                                    <span class="score">${match.score.team1}</span>
                                </div>
                            </div>
                            <div class="vs">VS</div>
                            <div class="team team-right ${match.winner === match.team2 ? 'match-winner' : ''}">
                                <div class="team-score">
                                    <span class="score">${match.score.team2}</span>
                                </div>
                                <div class="team-info">
                                    <h3>${match.team2}</h3>
                                </div>
                            </div>
                        </div>
                        <div class="match-result-actions">
                            <button class="view-result-btn" data-match-id="${match.id}">View Result</button>
                        </div>
                        <div class="match-details">
                            <p><i class="fas fa-trophy"></i> Winner: ${match.winner || 'Draw'}</p>
                            <p><i class="fas fa-calendar"></i> ${match.date} at ${match.time}</p>
                        </div>
                    `;

                    resultsContainer.appendChild(resultCard);
                });
            } else {
                resultsContainer.innerHTML = '<p class="no-results">No results yet. Check back soon!</p>';
            }
        }
    }, 100); // Small delay to ensure DOM is ready


});