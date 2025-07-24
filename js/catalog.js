
  const appData = {
    "apps": [
      {
        "id": "x-video-downloader",
        "name": "X Video Downloader",
        "icon": "images/catalog/x-icon.png",
        "description": "Download videos from X (formerly Twitter) in HD.",
        "features": [
          "Multiple resolution support",
          "Batch download",
          "Share directly to gallery"
        ],
        "category": "Tools",
        "platforms": ["Android"],
        "downloadUrl": "#",
        "rating": 4.8,
        "version": "2.5.1",
        "updated": "2025-07-18"
      },
      {
        "id": "vibe",
        "name": "Vibe",
        "icon": "images/catalog/vibe.png",
        "description": "A vibrant and lightweight music player with mood-based playlists.",
        "features": [
          "Custom themes",
          "Offline playback",
          "Sleep timer"
        ],
        "category": "Music & Audio",
        "platforms": ["Android", "iOS"],
        "downloadUrl": "#",
        "rating": 4.4,
        "version": "1.8.0",
        "updated": "2025-07-01"
      },
      {
        "id": "minimalist-todolist",
        "name": "Minimalist ToDoList",
        "icon": "images/catalog/minimalist-todo-list.png",
        "description": "Keep your day organized with a clean, clutter-free task list.",
        "features": [
          "Dark mode support",
          "Drag and drop tasks",
          "No sign-up required"
        ],
        "category": "Productivity",
        "platforms": ["Android"],
        "downloadUrl": "#",
        "rating": 4.2,
        "version": "1.0.5",
        "updated": "2025-07-10"
      },
      {
        "id": "game-2048",
        "name": "2048 Game",
        "icon": "images/catalog/2048-icon.png",
        "description": "Swipe tiles and reach 2048 in this addictive puzzle game!",
        "features": [
          "Classic and time-attack modes",
          "Leaderboard integration",
          "Undo last move"
        ],
        "category": "Games",
        "platforms": ["Android", "iOS"],
        "downloadUrl": "#",
        "rating": 4.5,
        "version": "3.1.2",
        "updated": "2025-07-05"
      },
      {
        "id": "perzsi",
        "name": "Perzsi",
        "icon": "images/catalog/perzsi.png",
        "description": "An elegant e-commerce platform built for smart shopping and selling.",
        "features": [
          "Secure payments",
          "Seller dashboard",
          "Wishlist and cart sync",
          "Flash sales and promos"
        ],
        "category": "Shopping",
        "platforms": ["Android", "iOS", "Web"],
        "downloadUrl": "#",
        "rating": 4.7,
        "version": "1.2.0",
        "updated": "2025-07-22"
      }
    ]
  };

  // Function to generate HTML for each app
  function generateAppHTML(app) {
    return `
      <div class="col-md-3 col-sm-6 app-item">
        <div class="app-table wow fadeInUp">
          <div class="table-inner text-center">
            <img class="app-icon" src="${app.icon}" alt="${app.name}" class="app-icon">
            <h3>${app.name}</h3>
            <p class="phrase">${app.description}</p>
            <ul class="feature-list">
              ${app.features.map(feature => `<li><i class="fa fa-check"></i> ${feature}</li>`).join('')}
            </ul>
            <a href="${app.downloadUrl}" class="btn btn-blue">Download Now</a>
          </div>
        </div>
      </div>
    `;
  }

  // Inject apps into the catalog grid container
  const appGrid = document.getElementById('app-grid');
  if (appGrid) {
    appGrid.innerHTML = appData.apps.map(generateAppHTML).join('');
  }