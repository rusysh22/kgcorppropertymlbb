// KG CORPORATE/PROPERTY MLBB Tournament Website
// Gaming - Interactive Tournament Website

document.addEventListener('DOMContentLoaded', () => {
    // ========================
    // Configuration & Data
    // ========================
    
    // Sample data - matches with live status for match 1 and 2, and upcoming matches scheduled from Oct 21-24, 2025
    const matches = [
        { id: 1, team1: 'ENG', team2: 'AUDIT', status: 'completed', date: '2025-10-20', time: '17:00', score: { team1: 0, team2: 2 }, winner: 'AUDIT', completed: true },
        { id: 2, team1: 'CITIS', team2: 'ACC/TAX/FSD', status: 'pending', date: '2025-10-20', time: '17:30', score: null, winner: null, completed: false },
        { id: 3, team1: 'CFP', team2: 'ENG', status: 'completed', date: '2025-10-21', time: '21:00', score: { team1: 2, team2: 0 }, winner: 'CFP', completed: true },
        { id: 4, team1: 'CFP', team2: 'CITIS', status: 'completed', date: '2025-10-23', time: '17:00', score: { team1: 2, team2: 0 }, winner: 'CFP', completed: true },
        { id: 5, team1: 'ACC/TAX/FSD', team2: 'AUDIT', status: 'completed', date: '2025-10-22', time: '17:00', score: { team1: 2, team2: 0 }, winner: 'ACC/TAX/FSD', completed:true },
        { id: 6, team1: 'ENG', team2: 'CITIS', status: 'completed', date: '2025-10-22', time: '12:30', score: { team1: 0, team2: 2 }, winner: 'CITIS', completed: true },
        { id: 7, team1: 'CFP', team2: 'ACC/TAX/FSD', status: 'completed', date: '2025-10-22', time: '12:30', score: { team1: 2, team2: 0 }, winner: 'CFP', completed: true },
        { id: 8, team1: 'AUDIT', team2: 'CITIS', status: 'completed', date: '2025-10-23', time: '21:00', score: { team1: 2, team2: 0 }, winner: 'AUDIT', completed: true },
        { id: 9, team1: 'ENG', team2: 'ACC/TAX/FSD', status: 'today', date: '2025-10-24', time: '17:00', score: null, winner: null, completed: false },
        { id: 10, team1: 'CFP', team2: 'AUDIT', status: 'completed', date: '2025-10-24', time: '13:00', score: { team1: 2, team2: 0 }, winner: 'CFP', completed: true },
    ];
    
    const teamsData = {
        'ENG': { 
            players: ['JavFlo', 'Gedan Barai', 'AanZ', 'Tiga Kilo', 'LoGue_end', '[ATHENA]*Hunterz', 'Koinzeel*', 'Swepeer14', 'lupus'],
            color: '#00ffff',
            contact: { name: 'Niko', phone: '+62 812-1283-5637' }
        },
        'CFP': { 
            players: ['Shubkhi', 'zemos', 'Wally', 'Cloe', 'Exodus', 'DougyMandagri (Fajar)'],
            color: '#ff00ff',
            contact: { name: 'Dani', phone: '+62 823-3156-5773' }
        },
        'CITIS': { 
            players: ['IngusPinguin', '-dominic', 'Bita_1114', 'canonball', 'tas.gemblok', 'firequadr (Fifi)', 'πng (Titus)'],
            color: '#ffff00',
            contact: { name: 'Dinda', phone: '+62 857-1895-6130' }
        },
        'ACC/TAX/FSD': { 
            players: ['RainyCry-ING', 'Na0mi Tier 1A.', 'b i a w a k', 'totensman', 'lordjuicy', 'Inola', 'el pablo', 'dandelions'],
            color: '#ff5733',
            contact: { name: 'Yori', phone: '+62 877-7556-8776' }
        },
        'AUDIT': { 
            players: ['Superjorrr (cici)', 'Iyelito', 'Koro', 'SquishyPapa', 'Na0mi Tier 1A.'],
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
                
                // Remove active class from all buttons and content (normal tab behavior)
                document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
                
                // Add active class to clicked button
                btn.classList.add('active');
                
                if (tabId === 'completed') {
                    // For completed tab, show only instruction
                    const completedTab = document.getElementById('completed-tab');
                    if (completedTab) {
                        completedTab.classList.add('active');
                        
                        // Clear all content and show only instruction
                        completedTab.innerHTML = '';
                        
                        // Add instruction message to the completed tab
                        const instructionMessage = document.createElement('p');
                        instructionMessage.className = 'tab-instruction';
                        instructionMessage.innerHTML = 'Completed match results are displayed in the <strong>Match Results</strong> section below.';
                        
                        completedTab.appendChild(instructionMessage);
                    }
                    
                    // Scroll to results section as well
                    const resultsSection = document.getElementById('results');
                    if (resultsSection) {
                        // Use setTimeout to allow DOM update before scroll
                        setTimeout(() => {
                            resultsSection.scrollIntoView({ behavior: 'smooth' });
                        }, 300);
                    }
                } else {
                    // For other tabs (upcoming, pending), show the content normally
                    document.getElementById(`${tabId}-tab`).classList.add('active');
                }
                
                // Update graph view if needed
                if (tabId === 'results') {
                    setTimeout(updateGraphView, 200);
                }
            });
        });
    }

    // ========================
    // Data Processing Functions
    // ========================
    
    // Calculate standings
    function calculateStandings(matches) {
        const teams = {};
        
        // Initialize teams with zero values (removed draws since we're removing the draw column)
        Object.keys(teamsData).forEach(teamName => {
            teams[teamName] = {
                name: teamName,
                wins: 0,
                losses: 0,
                // Removed draws property since we're removing the draw column
                played: 0,
                points: 0,
                form: [] // Last 5 matches
            };
        });
        
        // Process completed matches to update standings
        matches.forEach(match => {
            if (match.completed && match.score !== null && match.status === 'completed') {
                const { team1, team2, score, winner } = match;
                
                if (teams[team1] && teams[team2]) {
                    // Update played matches
                    teams[team1].played++;
                    teams[team2].played++;
                    
                    // Update form and stats (only for wins/losses, exclude draws)
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
                    }
                    // Removed handling for draws since we're removing the draw column
                    // If there's a match with winner === null, it won't affect standings
                    
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
            
        // Get pending matches
        const pendingMatches = matches
            .filter(match => match.status === 'pending')
            .sort((a, b) => new Date(a.date) - new Date(b.date));

        const upcomingContainer = document.querySelector('#upcoming-tab .schedule-grid');
        const pendingContainer = document.querySelector('#pending-tab .schedule-grid');

        if (upcomingContainer) {
            upcomingContainer.innerHTML = '';
            if (upcomingMatches.length > 0) {
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
            } else {
                upcomingContainer.innerHTML = '<p class="no-matches-message">No upcoming matches scheduled. All remaining matches will be held today!</p>';
            }
        }

        if (pendingContainer) {
            pendingContainer.innerHTML = '';
            if (pendingMatches.length > 0) {
                pendingMatches.forEach(match => {
                    const matchCard = document.createElement('div');
                    matchCard.classList.add('match-card', 'pending-match');
                    matchCard.innerHTML = `
                        <div class="match-header">
                            <span class="match-status pending">PENDING</span>
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
                    pendingContainer.appendChild(matchCard);
                });
            } else {
                pendingContainer.innerHTML = '<p class="no-matches-message">No pending matches at this time.</p>';
            }
        }
    }
    
    // Render results with sort, filter, and view functionality
    function renderResults(sortOrder = 'desc', filterTeam = '', viewMode = 'grid') {
        // Get completed matches with a clear winner (not draws)
        let completedMatchesWithWinner = matches
            .filter(match => match.completed && match.status !== 'pending' && match.winner !== null);

        // Apply team filter if specified
        if (filterTeam) {
            completedMatchesWithWinner = completedMatchesWithWinner.filter(match => 
                match.team1 === filterTeam || match.team2 === filterTeam
            );
        }

        // Sort by date and time
        completedMatchesWithWinner = completedMatchesWithWinner.sort((a, b) => {
            // Create date objects with both date and time for accurate sorting
            const dateA = new Date(`${a.date} ${a.time}`);
            const dateB = new Date(`${b.date} ${b.time}`);
            
            if (sortOrder === 'asc') {
                return dateA - dateB; // Ascending order (oldest first)
            } else {
                return dateB - dateA; // Descending order (newest first) - default
            }
        });

        const resultsContainer = document.querySelector('.results-grid');

        if (resultsContainer) {
            // Clear container and set view mode class
            resultsContainer.innerHTML = '';
            resultsContainer.className = 'results-grid';
            if (viewMode === 'kanban') {
                resultsContainer.classList.add('kanban-view');
            }

            if (completedMatchesWithWinner.length > 0) {
                if (viewMode === 'kanban') {
                    // Group matches by date for kanban view
                    const matchesByDate = {};
                    
                    completedMatchesWithWinner.forEach(match => {
                        const matchDate = match.date;
                        if (!matchesByDate[matchDate]) {
                            matchesByDate[matchDate] = [];
                        }
                        matchesByDate[matchDate].push(match);
                    });

                    // Create kanban columns for each date
                    Object.keys(matchesByDate).forEach(date => {
                        const column = document.createElement('div');
                        column.className = 'kanban-column';
                        
                        // Format date for display
                        const formattedDate = new Date(date).toLocaleDateString('en-US', { 
                            weekday: 'long', 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                        });
                        
                        column.innerHTML = `
                            <div class="kanban-column-header">
                                <h3 class="kanban-column-title">${formattedDate}</h3>
                                <span class="kanban-column-count">${matchesByDate[date].length}</span>
                            </div>
                            <div class="kanban-items">
                            </div>
                        `;
                        
                        const kanbanItemsContainer = column.querySelector('.kanban-items');
                        
                        matchesByDate[date].forEach(match => {
                            const kanbanItem = document.createElement('div');
                            kanbanItem.className = 'kanban-item';
                            kanbanItem.innerHTML = `
                                <div class="kanban-item-header">
                                    <div class="match-time">${match.time}</div>
                                    <span class="kanban-item-status">RESULT</span>
                                </div>
                                <div class="kanban-item-teams">
                                    <div class="kanban-team ${match.winner === match.team1 ? 'match-winner' : ''}">
                                        <div class="kanban-team-name">${match.team1}</div>
                                        <div class="kanban-team-score">${match.score.team1}</div>
                                    </div>
                                    <div class="kanban-vs">VS</div>
                                    <div class="kanban-team ${match.winner === match.team2 ? 'match-winner' : ''}">
                                        <div class="kanban-team-score">${match.score.team2}</div>
                                        <div class="kanban-team-name">${match.team2}</div>
                                    </div>
                                </div>
                                <div class="kanban-item-details">
                                    <p><i class="fas fa-trophy"></i> Winner: ${match.winner}</p>
                                    <div class="match-result-actions">
                                        <button class="view-result-btn" data-match-id="${match.id}">View Result</button>
                                    </div>
                                </div>
                            `;
                            
                            kanbanItemsContainer.appendChild(kanbanItem);
                        });
                        
                        resultsContainer.appendChild(column);
                    });
                } else {
                    if (viewMode === 'chart') {
                        // Chart view - just render the graph and hide match cards
                        resultsContainer.innerHTML = '';
                        resultsContainer.className = 'results-grid chart-view';
                        setTimeout(updateGraphView, 50); // Render the points chart
                        
                        // Add a message to indicate that chart is displayed
                        const chartMessage = document.createElement('div');
                        chartMessage.className = 'chart-message';
                        chartMessage.innerHTML = '<p class="no-matches-message">Showing team points chart. Switch to Grid or Kanban view to see match results.</p>';
                        resultsContainer.appendChild(chartMessage);
                    } else {
                        // Grid view (original format)
                        completedMatchesWithWinner.forEach(match => {
                            const resultCard = document.createElement('div');
                            resultCard.classList.add('match-card');

                            resultCard.innerHTML = `
                                <div class="match-header">
                                    <span class="match-status">RESULT</span>
                                    <div class="match-time">${match.date} ${match.time}</div>
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
                                    <p><i class="fas fa-trophy"></i> Winner: ${match.winner}</p>
                                    <p><i class="fas fa-calendar"></i> ${match.date} at ${match.time}</p>
                                </div>
                            `;

                            resultsContainer.appendChild(resultCard);
                        });
                    }
                }
            } else {
                resultsContainer.innerHTML = '<p class="no-results">No decisive results yet. Check back after matches are completed.</p>';
            }
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

                // Calculate total matches played (excluding draws since we're removing the draw column)
                const played = team.wins + team.losses; // Removed team.draws from calculation

                // Create form indicators HTML using colored circles (excluding draws)
                let formIndicators = '';
                if (team.form.length > 0) {
                    formIndicators = team.form.map(result => {
                        if (result === 'W') {
                            return '<span class="form-win" title="Win"></span>';
                        } else if (result === 'L') {
                            return '<span class="form-loss" title="Loss"></span>';
                        }
                        // Removed 'D' (Draw) indicator since we're removing the draw column
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
        
        // Filter matches for today's date that are not completed and not pending
        const todayMatches = matches.filter(match => match.date === todayStr && match.status !== 'pending' && !match.completed);
        
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
                
                // Add specific class based on status
                if (match.status === 'live') {
                    matchCard.classList.add('live-match');
                }

                // Set default scores if match doesn't have a score yet
                const team1Score = match.score && match.score.team1 !== undefined ? match.score.team1 : '0';
                const team2Score = match.score && match.score.team2 !== undefined ? match.score.team2 : '0';

                matchCard.setAttribute('data-match-id', match.id);

                matchCard.innerHTML = `
                    <div class="match-header">
                        <span class="match-status ${match.status}">${match.status.toUpperCase()}</span>
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

                // Check for multiple images (a, b)
                const possibleSuffixes = ['a', 'b'];

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
        
        // Close popup with keyboard events
        function handleKeyboardEvents(e, elementToRemove) {
            if (e.key === 'Escape' || e.key === 'Enter') {
                elementToRemove.remove();
                document.removeEventListener('keydown', handleKeyboardEvents);
            }
        }
        
        document.addEventListener('keydown', function(e) {
            handleKeyboardEvents(e, overlay);
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
    
    // Show pending matches notification
    function showPendingMatchesNotification() {
        // Get pending matches
        const pendingMatches = matches.filter(match => match.status === 'pending');
        
        if (pendingMatches.length > 0) {
            // Create notification popup
            const notification = document.createElement('div');
            notification.id = 'pending-matches-notification';
            notification.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.8);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 10000; /* Above initial alert */
                backdrop-filter: blur(5px);
            `;
            
            notification.innerHTML = `
                <div style="
                    background: #1a1a1a;
                    border: 2px solid #ff0000;
                    border-radius: 10px;
                    padding: 30px;
                    width: 80%;
                    max-width: 500px;
                    text-align: center;
                    box-shadow: 0 0 30px rgba(255, 0, 0, 0.5);
                    position: relative;
                " class="heartbeat">
                    <span id="close-notification-x" style="
                        position: absolute;
                        top: 10px;
                        right: 15px;
                        font-size: 1.5rem;
                        color: #ff0000;
                        cursor: pointer;
                        font-weight: bold;
                        z-index: 10000;
                    " class="heartbeat">&times;</span>
                    <h2 style="
                        color: #ff0000;
                        font-family: 'Orbitron', sans-serif;
                        margin-top: 0;
                        text-shadow: 0 0 10px rgba(255, 0, 0, 0.7);
                        padding-top: 10px;
                    " class="heartbeat">
                        <i class="fas fa-exclamation-triangle"></i> PENDING MATCHES ALERT
                    </h2>
                    <p style="color: #ffffff; margin: 20px 0;">
                        There are pending matches that require attention:
                    </p>
                    <div style="max-height: 200px; overflow-y: auto; margin: 20px 0; text-align: left;">
                        ${pendingMatches.map(match => `
                            <div style="
                                background: rgba(26, 26, 26, 0.7);
                                border: 1px solid #00ffff;
                                border-radius: 5px;
                                padding: 10px;
                                margin: 10px 0;
                            ">
                                <strong>${match.team1}</strong> vs <strong>${match.team2}</strong>
                                <br>
                                <small>Date: ${match.date} at ${match.time}</small>
                            </div>
                        `).join('')}
                    </div>
                    <div id="countdown-timer" style="
                        font-size: 0.9rem;
                        font-weight: bold;
                        color: #ff0000;
                        margin: 15px 0;
                        padding: 8px;
                        background: rgba(0, 0, 0, 0.5);
                        border: 1px solid #ff0000;
                        border-radius: 5px;
                        font-family: 'Orbitron', sans-serif;
                        text-shadow: 0 0 5px red;
                    " class="heartbeat">
                        Loading...
                    </div>
                    <p style="color: #ffffff; margin: 20px 0;">
                        Make sure this match is completed as soon as possible before Friday, October 24, 2025 at 23:59 WIB
                    </p>
                    <button id="close-notification" style="
                        background: linear-gradient(135deg, #00ffff, #ff00ff);
                        color: #0a0a0a;
                        border: none;
                        padding: 12px 30px;
                        border-radius: 5px;
                        font-weight: bold;
                        cursor: pointer;
                        font-family: 'Montserrat', sans-serif;
                        text-transform: uppercase;
                        letter-spacing: 1px;
                        box-shadow: 0 0 15px rgba(0, 255, 255, 0.5);
                        transition: all 0.3s ease;
                    ">OK</button>
                </div>
            `;
            
            document.body.appendChild(notification);
            
            // Add countdown timer
            const countdownElement = document.getElementById('countdown-timer');
            const deadline = new Date('2025-10-24T23:59:59+07:00'); // WIB timezone is UTC+7
            
            // Using the shared countdown functionality
            const countdownInterval = startCountdown(deadline, countdownElement, 'heartbeat', 'DEADLINE REACHED!', '0 0 10px red, 0 0 20px red');
            
            // Set automatic close after 5 seconds
            const autoCloseTimeout = setTimeout(() => {
                clearInterval(countdownInterval); // Clear the countdown interval
                if (document.body.contains(notification)) { // Check if notification still exists
                    document.body.removeChild(notification);
                }
            }, 5000); // 5 seconds
            
            // Add event listener to close button (OK)
            document.getElementById('close-notification').addEventListener('click', function() {
                clearTimeout(autoCloseTimeout); // Clear the auto-close timeout
                clearInterval(countdownInterval); // Clear the interval to prevent memory leaks
                document.body.removeChild(notification);
            });
            
            // Add event listener to close button (X)
            document.getElementById('close-notification-x').addEventListener('click', function() {
                clearTimeout(autoCloseTimeout); // Clear the auto-close timeout
                clearInterval(countdownInterval); // Clear the interval to prevent memory leaks
                document.body.removeChild(notification);
            });
            
            // Close popup when clicking outside the content
            notification.addEventListener('click', function(event) {
                if (event.target === notification) {
                    clearTimeout(autoCloseTimeout); // Clear the auto-close timeout
                    clearInterval(countdownInterval); // Clear the interval to prevent memory leaks
                    document.body.removeChild(notification);
                }
            });
            
            // Close popup with keyboard events
            function handleKeyboardEvents(e) {
                if (e.key === 'Escape' || e.key === 'Enter') {
                    clearTimeout(autoCloseTimeout); // Clear the auto-close timeout
                    clearInterval(countdownInterval); // Clear the interval to prevent memory leaks
                    document.body.removeChild(notification);
                    document.removeEventListener('keydown', handleKeyboardEvents);
                }
            }
            
            document.addEventListener('keydown', handleKeyboardEvents);
        }
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
        renderResults('desc', '', 'grid'); // Default: sort by descending date/time, no team filter, grid view
        renderLeaderboard();
        renderTeams();
        updateLiveMatches();
        createStars();
        initParticles();
        addViewResultButtonListeners();
        initIntersectionObserver();
        
        // Initialize permanent alert
        initPermanentAlert();
        
        // Show pending matches notification on first visit or refresh
        showPendingMatchesNotification();
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

    // Shared function to handle countdown timers
    function startCountdown(deadline, element, animationClass, completedText, textShadow) {
        function updateCountdown() {
            const now = new Date();
            const timeDiff = deadline - now;
            
            if (timeDiff <= 0) {
                element.textContent = completedText;
                element.style.color = '#ff0000';
                element.style.textShadow = textShadow;
                element.classList.add(animationClass);
                return;
            }
            
            const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
            
            element.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }
        
        // Update countdown immediately and then every second
        updateCountdown();
        return setInterval(updateCountdown, 1000);
    }






    // Function to add sliding animation to long team names for completed matches
    function addSlidingAnimationToTeamNames() {
        // For completed matches in schedule
        const completedTab = document.getElementById('completed-tab');
        if (completedTab) {
            const teamNamesInCompleted = completedTab.querySelectorAll('.team-info h3');
            teamNamesInCompleted.forEach(teamName => {
                // Check if the text overflows the container
                if (teamName.scrollWidth > teamName.clientWidth) {
                    teamName.classList.add('sliding-text');
                }
            });
        }

        // For results section (grid view)
        const resultsSection = document.querySelector('.results-grid');
        if (resultsSection) {
            // Grid view team names
            const teamNamesInResults = resultsSection.querySelectorAll('.team-info h3');
            teamNamesInResults.forEach(teamName => {
                // Check if the text overflows the container
                if (teamName.scrollWidth > teamName.clientWidth) {
                    teamName.classList.add('sliding-text');
                }
            });
            
            // Kanban view team names
            const kanbanTeamNames = resultsSection.querySelectorAll('.kanban-team-name');
            kanbanTeamNames.forEach(teamName => {
                // Check if the text overflows the container
                if (teamName.scrollWidth > teamName.clientWidth) {
                    teamName.classList.add('sliding-text');
                }
            });
        }
    }

    // Call the function after a short delay to ensure DOM is updated
    setTimeout(addSlidingAnimationToTeamNames, 200);

    // Function to create and update graph view for results
    function updateGraphView() {
        const resultsContainer = document.querySelector('.results-grid');
        if (!resultsContainer) return;
        
        // Check if we're in kanban view
        if (!resultsContainer.classList.contains('kanban-view')) return;
        
        // Calculate team statistics
        const standings = calculateStandings(matches);
        
        // Create or update the graph container
        let graphContainer = document.getElementById('results-graph-container');
        if (!graphContainer) {
            graphContainer = document.createElement('div');
            graphContainer.id = 'results-graph-container';
            graphContainer.className = 'results-graph-container';
            
            // Insert at the top of the results container
            resultsContainer.insertBefore(graphContainer, resultsContainer.firstChild);
        }
        
        // Generate chart data
        const teamNames = standings.map(team => team.name);
        const pointsData = standings.map(team => team.points);
        
        // Create a canvas for the chart
        let canvas = document.getElementById('points-chart');
        if (!canvas) {
            graphContainer.innerHTML = '<h3>Team Points Overview</h3><canvas id="points-chart" width="800" height="400"></canvas>';
            canvas = document.getElementById('points-chart');
        }
        
        // Draw the chart (simple bar chart implementation)
        drawPointsChart(canvas, teamNames, pointsData);
    }
    
    // Simple function to draw a points chart using canvas
    function drawPointsChart(canvas, teamNames, pointsData) {
        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;
        
        // Clear canvas
        ctx.clearRect(0, 0, width, height);
        
        // Background
        ctx.fillStyle = '#0a0a0a';
        ctx.fillRect(0, 0, width, height);
        
        if (teamNames.length === 0) return;
        
        // Calculate chart dimensions with margins
        const margin = { top: 30, right: 30, bottom: 60, left: 60 };
        const chartWidth = width - margin.left - margin.right;
        const chartHeight = height - margin.top - margin.bottom;
        
        // Find the maximum points for scaling
        const maxPoints = Math.max(...pointsData, 10); // Ensure minimum scale
        
        // Draw Y-axis grid lines and labels
        ctx.strokeStyle = '#333';
        ctx.lineWidth = 1;
        ctx.font = '12px Arial';
        ctx.fillStyle = '#fff';
        
        // Draw Y axis
        ctx.beginPath();
        ctx.moveTo(margin.left, margin.top);
        ctx.lineTo(margin.left, height - margin.bottom);
        ctx.stroke();
        
        // Draw X axis
        ctx.beginPath();
        ctx.moveTo(margin.left, height - margin.bottom);
        ctx.lineTo(width - margin.right, height - margin.bottom);
        ctx.stroke();
        
        // Draw Y grid lines and labels
        for (let i = 0; i <= 10; i++) {
            const yValue = (maxPoints / 10) * i;
            const y = height - margin.bottom - (yValue / maxPoints) * chartHeight;
            
            // Draw grid line
            ctx.beginPath();
            ctx.moveTo(margin.left, y);
            ctx.lineTo(width - margin.right, y);
            ctx.strokeStyle = '#333';
            ctx.stroke();
            
            // Draw label
            ctx.fillStyle = '#fff';
            ctx.textAlign = 'right';
            ctx.fillText(Math.round(yValue).toString(), margin.left - 5, y + 4);
        }
        
        // Draw X axis labels and bars
        const barWidth = Math.min(40, chartWidth / teamNames.length * 0.8);
        const barSpacing = (chartWidth - (barWidth * teamNames.length)) / (teamNames.length + 1);
        
        for (let i = 0; i < teamNames.length; i++) {
            const x = margin.left + barSpacing + i * (barWidth + barSpacing);
            const barHeight = (pointsData[i] / maxPoints) * chartHeight;
            const y = height - margin.bottom - barHeight;
            
            // Get team color for the bar
            const teamColor = teamsData[teamNames[i]] ? teamsData[teamNames[i]].color : '#ffffff';
            
            // Draw bar
            ctx.fillStyle = teamColor;
            ctx.fillRect(x, y, barWidth, barHeight);
            
            // Draw bar border
            ctx.strokeStyle = '#fff';
            ctx.lineWidth = 1;
            ctx.strokeRect(x, y, barWidth, barHeight);
            
            // Draw team name below the bar
            ctx.fillStyle = '#fff';
            ctx.textAlign = 'center';
            ctx.save();
            ctx.translate(x + barWidth / 2, height - margin.bottom + 15);
            ctx.rotate(-Math.PI / 4); // Rotate 45 degrees
            ctx.fillText(teamNames[i], 0, 0);
            ctx.restore();
            
            // Draw points value on top of bar
            if (barHeight > 15) {
                ctx.fillStyle = '#000';
                ctx.textAlign = 'center';
                ctx.font = 'bold 12px Arial';
                ctx.fillText(pointsData[i].toString(), x + barWidth / 2, y + 12);
            } else if (barHeight > 5) {
                // If bar is too small, draw the text to the side
                ctx.fillStyle = '#fff';
                ctx.textAlign = 'center';
                ctx.font = '12px Arial';
                ctx.fillText(pointsData[i].toString(), x + barWidth / 2, y - 5);
            }
        }
        
        // Draw axis labels
        ctx.fillStyle = '#fff';
        ctx.textAlign = 'center';
        ctx.font = 'bold 14px Arial';
        ctx.fillText('Teams', width / 2, height - 5);
        ctx.save();
        ctx.translate(15, height / 2);
        ctx.rotate(-Math.PI / 2);
        ctx.fillText('Points', 0, 0);
        ctx.restore();
    }

    // Add event listener for tab changes to add sliding animation when switching to completed tab
    document.querySelectorAll('.tab-btn').forEach(button => {
        button.addEventListener('click', () => {
            setTimeout(addSlidingAnimationToTeamNames, 100);
        });
    });
    
    // Initialize permanent alert functionality
    function initPermanentAlert() {
        const permanentAlert = document.getElementById('permanent-alert');
        
        if (permanentAlert) {
            // Add click event to show the countdown timer popup
            permanentAlert.addEventListener('click', function() {
                // Create a temporary expanded notification with countdown timer when clicked
                const timerNotification = document.createElement('div');
                timerNotification.id = 'permanent-alert-timer';
                timerNotification.style.cssText = `
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.8);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 10001;
                    backdrop-filter: blur(5px);
                `;
                
                timerNotification.innerHTML = `
                    <div style="
                        background: #1a1a1a;
                        border: 2px solid #ff0000;
                        border-radius: 10px;
                        padding: 30px;
                        width: 80%;
                        max-width: 500px;
                        text-align: center;
                        box-shadow: 0 0 30px rgba(255, 0, 0, 0.5);
                        position: relative;
                    " class="zoom-in-out">
                        <span id="close-permanent-alert-timer" style="
                            position: absolute;
                            top: 10px;
                            right: 15px;
                            font-size: 1.5rem;
                            color: #ff0000;
                            cursor: pointer;
                            font-weight: bold;
                            z-index: 10000;
                        " class="heartbeat">&times;</span>
                        <h2 style="
                            color: #ff0000;
                            font-family: 'Orbitron', sans-serif;
                            margin-top: 0;
                            text-shadow: 0 0 10px rgba(255, 0, 0, 0.7);
                            padding-top: 10px;
                        " class="zoom-in-out">
                            <i class="fas fa-clock"></i> TOURNAMENT COUNTDOWN
                        </h2>
                        <p style="color: #ffffff; margin: 20px 0;">
                            Time remaining until tournament deadline:
                        </p>
                        <div id="permanent-countdown-timer" style="
                            font-size: 1.5rem;
                            font-weight: bold;
                            color: #ff0000;
                            margin: 25px 0;
                            padding: 15px;
                            background: rgba(0, 0, 0, 0.5);
                            border: 2px solid #ff0000;
                            border-radius: 10px;
                            font-family: 'Orbitron', sans-serif;
                            text-shadow: 0 0 10px rgba(255, 0, 0, 0.7);
                        " class="zoom-in-out">
                            Loading...
                        </div>
                        <p style="color: #ffffff; margin: 20px 0;">
                            Final deadline: Friday, October 24, 2025 at 23:59 WIB
                        </p>
                        <button id="close-permanent-alert-timer-btn" style="
                            background: linear-gradient(135deg, #ff0000, #ff6b6b);
                            color: #ffffff;
                            border: none;
                            padding: 12px 30px;
                            border-radius: 5px;
                            font-weight: bold;
                            cursor: pointer;
                            font-family: 'Montserrat', sans-serif;
                            text-transform: uppercase;
                            letter-spacing: 1px;
                            box-shadow: 0 0 15px rgba(255, 0, 0, 0.5);
                            transition: all 0.3s ease;
                        ">CLOSE</button>
                    </div>
                `;
                
                document.body.appendChild(timerNotification);
                
                // Add countdown timer functionality
                const countdownElement = document.getElementById('permanent-countdown-timer');
                const deadline = new Date('2025-10-24T23:59:59+07:00'); // WIB timezone is UTC+7
                
                // Using the shared countdown functionality
                const countdownInterval = startCountdown(deadline, countdownElement, 'zoom-in-out', 'DEADLINE REACHED!', '0 0 10px red, 0 0 20px red');
                
                // Add event listener to close button
                document.getElementById('close-permanent-alert-timer').addEventListener('click', function() {
                    clearInterval(countdownInterval); // Clear the interval to prevent memory leaks
                    document.body.removeChild(timerNotification);
                });
                
                document.getElementById('close-permanent-alert-timer-btn').addEventListener('click', function() {
                    clearInterval(countdownInterval); // Clear the interval to prevent memory leaks
                    document.body.removeChild(timerNotification);
                });
                
                // Close popup when clicking outside the content
                timerNotification.addEventListener('click', function(event) {
                    if (event.target === timerNotification) {
                        clearInterval(countdownInterval); // Clear the interval to prevent memory leaks
                        document.body.removeChild(timerNotification);
                    }
                });
                
                // Close popup with keyboard events
                function handleKeyboardEvents(e) {
                    if (e.key === 'Escape' || e.key === 'Enter') {
                        clearInterval(countdownInterval); // Clear the interval to prevent memory leaks
                        document.body.removeChild(timerNotification);
                        document.removeEventListener('keydown', handleKeyboardEvents);
                    }
                }
                
                document.addEventListener('keydown', handleKeyboardEvents);
            });
        }
    }
    

    
    // Initialize results section with sort, filter, and view functionality
    function initResultsControls() {
        const sortOrderSelect = document.getElementById('resultsSortOrder');
        const filterTeamSelect = document.getElementById('resultsFilterTeam');
        const gridViewBtn = document.getElementById('gridViewBtn');
        const kanbanViewBtn = document.getElementById('kanbanViewBtn');
        
        if (sortOrderSelect && filterTeamSelect && gridViewBtn && kanbanViewBtn) {
            // Populate team filter dropdown
            const uniqueTeams = [...new Set(matches.map(match => [match.team1, match.team2]).flat())];
            filterTeamSelect.innerHTML = '<option value="">All Teams</option>'; // Reset options
            
            uniqueTeams.forEach(team => {
                const option = document.createElement('option');
                option.value = team;
                option.textContent = team;
                filterTeamSelect.appendChild(option);
            });
            
            // Initialize view mode (default is grid)
            let currentViewMode = 'grid';
            
            // Add event listeners for sort and filter changes
            sortOrderSelect.addEventListener('change', () => {
                const sortOrder = sortOrderSelect.value;
                const filterTeam = filterTeamSelect.value;
                renderResults(sortOrder, filterTeam, currentViewMode);
                addSlidingAnimationToTeamNames(); // Reapply animations after re-rendering
            });
            
            filterTeamSelect.addEventListener('change', () => {
                const sortOrder = sortOrderSelect.value;
                const filterTeam = filterTeamSelect.value;
                renderResults(sortOrder, filterTeam, currentViewMode);
                addSlidingAnimationToTeamNames(); // Reapply animations after re-rendering
            });
            
            // Add event listeners for view mode toggle
            gridViewBtn.addEventListener('click', () => {
                currentViewMode = 'grid';
                gridViewBtn.classList.add('active');
                kanbanViewBtn.classList.remove('active');
                
                const sortOrder = sortOrderSelect.value;
                const filterTeam = filterTeamSelect.value;
                renderResults(sortOrder, filterTeam, currentViewMode);
                addSlidingAnimationToTeamNames(); // Reapply animations after re-rendering
            });
            
            kanbanViewBtn.addEventListener('click', () => {
                currentViewMode = 'kanban';
                kanbanViewBtn.classList.add('active');
                gridViewBtn.classList.remove('active');
                
                const sortOrder = sortOrderSelect.value;
                const filterTeam = filterTeamSelect.value;
                renderResults(sortOrder, filterTeam, currentViewMode);
                addSlidingAnimationToTeamNames(); // Reapply animations after re-rendering
            });
        }
    }
    
    // Initialize the results controls after initial render
    setTimeout(initResultsControls, 100);
    

});