/**
 * Creates an offscreen document that can be used to load iframes containing
 * scripts that can communicate with the extension through the chrome runtime
 * API. Only one offscreen document may exist, so iframes are used within the
 * created offscreen document. See the offscreen folder for more details.
 */
async function createOffscreen() {
    if (await chrome.offscreen.hasDocument()) {
        return;
    }

    const x = await chrome.offscreen.createDocument({
        url: './offscreen.html',
        reasons: ['IFRAME_SCRIPTING'],
        justification:
            'Used for Hardware Wallet and Snaps scripts to communicate with the extension.',
    });

    console.debug('Offscreen iframe loaded', x);
}

createOffscreen();