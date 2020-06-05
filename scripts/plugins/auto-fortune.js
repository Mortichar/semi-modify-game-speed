(() => {
    const id = 'auto-fortune';
    const title = 'AutoFortune';
    const desc = 'AutoFortune does the things for the cases.';
    const imgSrc = 'assets/media/main/caseoffortune.png?2';
    // const skill = '???';

    const autoFortune = () => {
        const iframeBtn = $('iframe').contents().find("#case-claimandspin-btn");
        if (iframeBtn.css('display') !== "none") { iframeBtn.click(); }
        if (mbucks<69) {
            console.log("SEMI sez: You're low on M-Bucks! Begging parents for more.");
            // SEMI.customNotify(imgSrc, "You're low on M-Bucks! Begging parents for more.", 250);
            for (i=0;i<3;i++) { setTimeout( () => {
                if (mbucks>69) return;
                $('.btn.btn-sm.btn-danger.m-2').click();
            }, 100*i); }
        }
    };

    const onEnable = () => {
        changePage(22);
        SEMI.customNotify(imgSrc, 'SPIN TO WIN!', 5000);
        $('iframe').contents().find("#case-spin-btn").click();
        console.log('sup? spinnin them crates 4u bro. \n welcome to console clog-a-thon 2020');
    };

    SEMI.add(id, {ms: 250, onLoop: autoFortune, onEnable, desc, imgSrc, title});
})();