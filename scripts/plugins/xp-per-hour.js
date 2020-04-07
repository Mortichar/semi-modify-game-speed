//::from Breakit on pastebin, modified for Melvor v0.12: https://pastebin.com/wq641Nhx
function XPH(running,stat) {
    XPH.Stats = [ "Woodcutting","Fishing","Firemaking","Cooking","Mining","Smithing","Attack","Strength","Defence","Hitpoints","Thieving","Farming","Ranged","Fletching","Crafting","Runecrafting","Magic","Prayer","Slayer","Herblore" ]
    if ((running == null) || (stat > 19) || (isNaN(running)) || (isNaN(stat))) {
       for (var i=0; i<XPH.Stats.length; i++) { console.log(i + ': ' + XPH.Stats[i]); }
       console.log('SYNTAX: XPH([1|0],[0-19])');
       //console.log(XPH.Stats.toSource()); //breaks XPH in chrome.
       console.log('["Woodcutting", "Fishing", "Firemaking", "Cooking", "Mining", "Smithing", "Attack", "Strength", "Defence", "Hitpoints", "Thieving", "Farming", "Ranged", "Fletching", "Crafting", "Runecrafting", "Magic", "Prayer", "Slayer", "Herblore"]');
       console.log('Example to Start/Check Strength XPH(1,7)');
       console.log('Example to Stop Strength XPH(0,7)');
       return
    } else {
      if (XPH.running) {
        XPH.rate = Math.floor((skillXP[stat] - XPH.exp) / ((Date.now() - XPH.time) / 1000) * 3600);
        XPH.rate = XPH.rate.toString();
        
        var pattern = /(-?\d+)(\d{3})/;
        while (pattern.test(XPH.rate)) XPH.rate = XPH.rate.replace(pattern, "$1,$2");
        //console.log('Current xp/hr rate for ' + XPH.Stats[stat] + ': ' + XPH.rate + '/hr -- Test running for ' + ((Date.now() - XPH.time) / 1000) + ' seconds.');
          if (!running) {
          console.log('Stopping');
          XPH.running = '';
          }
      } else {
        XPH.exp = skillXP[stat];
        XPH.time = Date.now();
        XPH.running = 1;
        XPH.skillID = stat;
        //XPH.testarr = ['testarr0', 'testarr1', '2', 'yo mamam'];
   
        console.log('Starting xp/hr monitoring for: ' + XPH.Stats[stat]);
        //console.log('Use XPH(1,' + stat + ') to view current exp/hr.');
        console.log('Use XPH(0,' + stat + ') to stop.');
      }
    }
  }
  //::what a great utility!
  
  //XPH GUI function
  var updateXPHloop;
  function xphDisplay(n) {    
      if (XPH.running && n !== 11) {
          $("#xphDialog").toggleClass('d-none');
          clearInterval(updateXPHloop);
          XPH(0,0); //stops if running already
      } else if (XPHf.running && n == 11) {
          $("#xphDialogF").toggleClass('d-none');
          clearInterval(updateXPHloopF);
          XPHf(0);
      } else if (XPHcombat.running && n !== 11) {
          $(".xphc").toggleClass('d-none');
          XPHcombat(0);
          clearInterval(updateXPHCloop);
      } else if (n == 11) {
          startXPHF();
      } else if (isInCombat) {
          customNotify('assets/media/main/statistics_header.svg', 'Check Combat Page Skill Progress table for XPH Combat Display!', 10000);
          startXPHC();
      } else if (currentlyCutting == 1 || currentlyCutting == 2) {
          startXPH(0);
      } else if (isFishing) {
          startXPH(1);
      } else if (isBurning) { //we be burning not concerning what nobody wanna say
          startXPH(2);
      } else if (isCooking) {
          startXPH(3);
      } else if (isMining) {
          startXPH(4);
      } else if (isSmithing) {
          startXPH(5);
      } else if (isThieving) {
          startXPH(10);
      } else if (isFletching) {
          startXPH(13);
      } else if (isCrafting) {
          startXPH(14);
      } else if (isRunecrafting) {
          startXPH(15);
      } else if (isHerblore) {
          startXPH(19);
      }
  }
  
  function startXPH(n) {
      XPH(1,n);
      $("#xphDialog").toggleClass('d-none');
      $("#xph-rate").text('...');
      $("#xph-time").text('0');
      $("#xph-skill").text(skillName[XPH.skillID]);
      $("#xph-lvl").text("... hrs");
      updateXPHloop = setInterval( () => {
          XPH(1,n);
          $("#xph-rate").text(XPH.rate);
          $("#xph-time").text(((Date.now() - XPH.time) / 1000).toFixed(0));
          if($("#xph-lvl-in").val()>99) $("#xph-lvl-in").val(99)
          if ((Number($("#xph-lvl-in").val()) > skillLevel[XPH.skillID]) && Number(XPH.rate.split(",").join(""))>0) {
              var timeToLvl = ( exp.level_to_xp(Number($("#xph-lvl-in").val())) - skillXP[XPH.skillID] )/Number(XPH.rate.split(",").join(""));
              var timeToLvl = timeToLvl.toFixed(1);
              if (timeToLvl<1000) {
                  $("#xph-lvl").text(timeToLvl + " hrs"); 
              } else if (timeToLvl>=1000) {
                  timeToLvl = timeToLvl / 24;
                  timeToLvl = timeToLvl.toFixed(0);
                  $("#xph-lvl").text(timeToLvl + " days"); 
              }
          } else { 
              timeToLvl = "..."; 
              $("#xph-lvl").text(timeToLvl + " hrs"); 
          }
          //should this loop just check for idle switching and switch automatically?!?!?!? dont have time for this tonight
          //if currentXPHskill !== idleSkill {change}
      }, 1000);
  }
  
  function XPHf(running) {
      if (XPHf.running) {
        XPHf.rate = Math.floor((skillXP[11] - XPHf.exp) / ((Date.now() - XPHf.time) / 1000) * 3600);
        XPHf.rate = XPHf.rate.toString();
        var pattern = /(-?\d+)(\d{3})/;
        while (pattern.test(XPHf.rate)) XPHf.rate = XPHf.rate.replace(pattern, "$1,$2");
        //console.log('Current xp/hr rate for ' + XPH.Stats[stat] + ': ' + XPH.rate + '/hr -- Test running for ' + ((Date.now() - XPH.time) / 1000) + ' seconds.');
        if (!running) {
          console.log('Stopping');
          XPHf.running = '';
        }
      } else {
        XPHf.exp = skillXP[11];
        XPHf.time = Date.now();
        XPHf.running = 1;
        console.log('Starting xp/hr monitoring for farming.');
      }
  }
  
  var updateXPHloopF;
  function startXPHF() {
      XPHf(1);
      $("#xphDialogF").toggleClass('d-none');
      $("#xph-rate-f").text('...');
      $("#xph-time-f").text('0');
      $("#xphf-lvl").text("... hrs"); 
      updateXPHloopF = setInterval( () => {
          XPHf(1);
          $("#xph-rate-f").text(XPHf.rate);
          $("#xph-time-f").text(((Date.now() - XPHf.time) / 1000).toFixed(0));
          if($("#xphf-lvl-in").val()>99) $("#xphf-lvl-in").val(99);
          if ((Number($("#xphf-lvl-in").val()) > skillLevel[11]) && Number(XPHf.rate.split(",").join(""))>0) {
              var timeToLvl = ( exp.level_to_xp(Number($("#xphf-lvl-in").val())) - skillXP[11] )/Number(XPHf.rate.split(",").join(""));
              var timeToLvl = timeToLvl.toFixed(1);
              if (timeToLvl<1000) {
                  $("#xphf-lvl").text(timeToLvl + " hrs"); 
              } else if (timeToLvl>=1000) {
                  timeToLvl = timeToLvl / 24;
                  timeToLvl = timeToLvl.toFixed(0);
                  $("#xphf-lvl").text(timeToLvl + " days"); 
              }
          } else { 
              timeToLvl = "..."; 
              $("#xphf-lvl").text(timeToLvl + " hrs"); 
          }
      }, 1000);
  }
  
  //Then from there, calculate the time until level up in hours or minutes?
  
  //XPH for all combat skills at once
  function XPHcombat(running) {
      if (XPHcombat.running) {
        for (i=0; i<8; i++) {
          XPHcombat.skills[i].rate = Math.floor((skillXP[XPHcombat.skills[i].id] - XPHcombat.skills[i].exp) / ((Date.now() - XPHcombat.time) / 1000) * 3600);
          XPHcombat.skills[i].rate = XPHcombat.skills[i].rate.toString();
          var pattern = /(-?\d+)(\d{3})/;
          while (pattern.test(XPHcombat.skills[i].rate)) XPHcombat.skills[i].rate = XPHcombat.skills[i].rate.replace(pattern, "$1,$2");
        }
        if (!running) {
            console.log('Stopping');
            XPHcombat.running = '';
        } 
      } else {
          XPHcombat.skills = [{
          name: 'Attack',
          id: 6,
          exp: 0,
          rate: 0
          }, {
          name: 'Strength',
          id: 7,
          exp: 0,
          rate: 0
          }, {
          name: 'Defense',
          id: 8,
          exp: 0,
          rate: 0
          }, {
          name: 'Hitpoints',
          id: 9,
          exp: 0,
          rate: 0
          }, {
          name: 'Ranged',
          id: 12,
          exp: 0,
          rate: 0
          }, {
          name: 'Magic',
          id: 16,
          exp: 0,
          rate: 0
          }, {
          name: 'Slayer',
          id: 18,
          exp: 0,
          rate: 0
          }, {
          name: 'Prayer',
          id: 17,
          exp: 0,
          rate: 0
          }];
          
          for (i=0; i<8; i++) { XPHcombat.skills[i].exp = skillXP[XPHcombat.skills[i].id]; }
          XPHcombat.time = Date.now();
          XPHcombat.running = 1; 
        console.log('Starting xp/hr monitoring for combat skills.');
        console.log('Use XPHcombat(0) or the button to stop.');
      }
  }
  
  //update time to lvl sections... convert from seconds to min if above 1000s, min to hr if above 1000h
  //Number($("#xphc-lvl-in-0").val())
  
  var updateXPHCloop;
  function startXPHC() {
      XPHcombat(1);
      //unhide & initialize tables
      $(".xphc").toggleClass('d-none');
      for (i=0; i<8; i++) { $("#xphc-rate-"+i).text('...'); }
      for (i=0; i<8; i++) { $("#xphc-lvl-"+i).text('... hrs'); }
      $("#xphc-time").text('0');
      if ($("#combat-skill-progress-menu").attr('class').split(' ').includes('d-none')) { toggleCombatSkillMenu(); }
      if (currentPage !== 13) { changePage(13); }
      updateXPHCloop = setInterval( () => {
          XPHcombat(1);
          for (i=0; i<8; i++) { 
              $("#xphc-rate-"+i).text(XPHcombat.skills[i].rate);
              if($("#xphc-lvl-in-"+i).val()>99) $("#xphc-lvl-in-"+i).val(99);
              if ((Number($("#xphc-lvl-in-"+i).val()) > skillLevel[XPHcombat.skills[i].id]) && Number(XPHcombat.skills[i].rate.split(",").join(""))>0) {
                  var timeToLvl = ( exp.level_to_xp(Number($("#xphc-lvl-in-"+i).val())) - skillXP[XPHcombat.skills[i].id] )/Number(XPHcombat.skills[i].rate.split(",").join(""));
                  var timeToLvl = timeToLvl.toFixed(1);
                  if (timeToLvl<1000) {
                      $("#xphc-lvl-"+i).text(timeToLvl + " hrs"); 
                  } else if (timeToLvl>=1000) {
                      var timeToLvl = timeToLvl / 24;
                      var timeToLvl = timeToLvl.toFixed(0);
                      $("#xphc-lvl-"+i).text(timeToLvl + " days"); 
                  }
              } else { 
                  timeToLvl = "..."; 
                  $("#xphc-lvl-"+i).text(timeToLvl + " hrs"); 
              }
          }
          $("#xphc-time").text(((Date.now() - XPHcombat.time) / 1000).toFixed(0));
      }, 1000);
  }