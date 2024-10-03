# Tab Title Fetcher - A Chrome Extension

This Chrome extension fetches and displays the title of the currently active tab in a popup window.

## Features

- Fetches the title of the active tab.
- Displays the title in a user-friendly popup window.
- Includes a stylish button to trigger the title fetch.

## Installation

### Local Development

To install the extension for development purposes:

1. **Download the Repository:** Download or copy the files (`manifest.json`, `popup.html`, `popup.css`, `popup.js`).
2. **Enable Developer Mode:**
   - Open Chrome and navigate to `chrome://extensions/`.
   - Toggle **Developer mode** in the top-right corner.
3. **Load Unpacked Extension:**
   - Click **Load unpacked** and select the folder containing the downloaded files.

> **Note:** This installation method is for local development only. To distribute the extension, you'll need to package and publish it on the Chrome Web Store.

## Usage

1. Install the extension following the steps above.
2. Navigate to any website in Chrome.
3. Click the extension icon in the toolbar (it may appear as a puzzle piece initially).
4. The popup window will appear, displaying the title of the current tab.

## Code Structure

The extension consists of the following key files:

- **`manifest.json`**: Defines the extension’s metadata, permissions, and popup configuration.
- **`popup.html`**: The HTML structure for the popup window.
- **`popup.css`**: Styles for the popup window’s appearance.
- **`popup.js`**: Contains the logic for handling button clicks and retrieving the tab title using the Chrome Extension API.

## Dependencies

- The extension uses the Chrome Extension API with the `tabs` permission to access the current tab's title.

## Contributing

Contributions are welcome! Feel free to fork the repository, suggest improvements, or open issues.
