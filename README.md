# New Tab Next

A simple and lightweight browser extension for Chrome and Brave that adds a customizable keyboard shortcut to open a new blank tab immediately to the right of your active tab. It also seamlessly integrates with Tab Groups!

## Features
- **Configurable Shortcut:** Choose any key combination you like natively through your browser's shortcut settings.
- **Smart Placement:** Opens the new blank tab directly to the right of your active tab instead of at the far end of the tab strip.
- **Tab Group Support:** If your current tab is part of a Tab Group, the new tab stays neatly inside the same group.
- **Lightweight:** Uses Manifest V3 and runs entirely on a lightweight background service worker with minimal permissions (`tabs` and `tabGroups`).

## Installation

### For Chrome and Brave:
1. Download or clone this repository to a local folder.
2. Navigate to your browser's extensions page (`chrome://extensions/` or `brave://extensions/`).
3. Enable the **Developer mode** toggle in the top right corner.
4. Click the **Load unpacked** button.
5. Select the folder containing these extension files.

## Configuration
To set or change your keyboard shortcut:
1. Go to your extensions shortcuts page (`chrome://extensions/shortcuts` or `brave://extensions/shortcuts`).
2. Scroll down until you find **New Tab Next**.
3. Click the box next to "Open a new tab next to current" and press your preferred key combination.
