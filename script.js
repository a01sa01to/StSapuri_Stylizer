// chrome.runtime.onMessage.addListener(function(msg,cb){
// 	// chrome.tabs.executeScript(null, {
// 	// 	code: 'document.querySelector("video#bitmovinplayer-video-player-root").playbackRate = 2;'
// 	// }, function(...a){
// 	// 	console.log(a);
// 	// })
// 	console.log(msg);
// })

window.addEventListener("load", async ()=>{
	const sleep = async t => new Promise(r=>setTimeout(r,t));
	const waitUntil = async (...e)=>{
		if(e.length === 1){
			if(document.querySelector(e)){
				return;
			}
			await sleep(300);
			await waitUntil(e);
			return;
		}
		e.forEach(async _=>{
			await waitUntil(_);
		});
	}
	const sel = "video#bitmovinplayer-video-player-root";
	await waitUntil(sel);
	document.querySelector(sel).playbackRate = 2;
})