// admin.js

// Functionality for the admin panel

function AdminPanel() {
    // Initialize the admin panel
    this.init = function() {
        console.log('Admin Panel Initialized');
    };

    // Method to add user
    this.addUser = function(username) {
        console.log(`User ${username} added.`);
    };

    // Method to remove user
    this.removeUser = function(username) {
        console.log(`User ${username} removed.`);
    };

    // Method to display all users
    this.displayUsers = function(users) {
        console.log('Current Users: ', users);
    };
}

// Usage example:
const adminPanel = new AdminPanel();
adminPanel.init();
