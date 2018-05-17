(() => {
    
    let procentOfSmth = points => {
        return points/100 * 20;
    }
    function User(){
        this.level = 1;
        this.ranking = 19;
        this.skills = {
            attack_power: 1,
            vitality: 1,
            critical_chance: 0,
            block_chance: 1
        };
        this.inventory = [];
        this.history = [
            {
                date: 'yyyy-mm-dd hh:mm',
                action: {
                    title: '',
                    details: {
                        //experience,price,place
                    }
                }
            }
        ];
        this.experience = 0;
        this.inventoryOn = [];
        this.coins = 0;
        this.weaponShop = [];
        this.armorShop = [];
        this.newWeapon = '1hour';
        this.newArmor = '1hour';
        this.gettedMessages = [
            {
                from: 'user',
                title: 'TUTYL',
                body: 'bodyofmessage',
                read: false
            }
        ];
        this.sendedMessages = [
            {
                to: 'user',
                title: 'title1',
                body: ''
            }
        ];
    }
    buisness = [
        {
            from: 'user',
            item: {

            },
            price: 0
        }
    ]
    attack = {
        from: {
            login: 'user',
            stats: {
                //strengthetc.
            }   
        },
        to: {
            login: 'user1',
            stats: {

            }
        },
        result: {
            winner: 'user',
            punches: [
                {
                    from: 0, //dmg
                    fromCrit: false,
                    fromBlock: true,
                    to: 0,
                    toCrit: false,
                    toBlock: true
                }
            ],
            experience: {
                from: 0,
                to: 0
            },
            ranking: {
                from: 0,
                to: 0
            },
            coins: {
                from: 0,
                to: 0
            }
        }
    }

    var userTest1 = new User();
    userTest1.level = 60;
    userTest1.login = 'kamis';
    userTest1.skills.attack_power = 542;
    userTest1.skills.vitality = 2321;
    userTest1.skills.critical_chance = 120;
    userTest1.skills.block_chance = 200;

    var userTest2 = new User();
    userTest2.level = 90;
    userTest2.login = 'mati';
    userTest2.skills.attack_power = 300;
    userTest2.skills.vitality = 3123;
    userTest2.skills.critical_chance = 100;
    userTest2.skills.block_chance = 230;

    fight = (user1, user2) => {
        //adding to stats from eq!
        let liveBoth = true;
        punches = [];
        let tmp = -1;
        while(liveBoth){
            tmp++;
            punches[tmp] = {};
            if(Math.random()*100 < procentOfSmth(user1.skills.critical_chance)){
                if(Math.random()*100 < procentOfSmth(user2.skills.block_chance)){
                    punches[tmp].fromBlock = true;
                    punches[tmp].from = 0;
                    punches[tmp].fromCrit = false;
                }else{
                    user2.skills.vitality -= user1.skills.attack_power * 1.5;
                    punches[tmp].from = user1.skills.attack_power * 1.5;
                    punches[tmp].fromCrit = true;
                    punches[tmp].fromBlock = false;
                }
                punches[tmp].fromRest = user2.skills.vitality;
            }else{
                if(Math.random()*100 < procentOfSmth(user2.skills.block_chance)){
                    punches[tmp].fromBlock = true;
                    punches[tmp].fromCrit = false;
                    punches[tmp].from = 0;
                }else{
                    user2.skills.vitality -= user1.skills.attack_power;
                    punches[tmp].from = user1.skills.attack_power;
                    punches[tmp].fromCrit = false;
                    punches[tmp].fromBlock = false;
                }
                punches[tmp].fromRest = user2.skills.vitality;
            }
            if(user2.skills.vitality <= 0){
                return({
                    winner: user1.login,
                    punches: punches
                });
            }
            if(Math.random()*100 < procentOfSmth(user2.skills.critical_chance)){
                if(Math.random()*100 < procentOfSmth(user1.skills.block_chance)){
                    punches[tmp].toBlock = true;
                    punches[tmp].to = 0;
                    punches[tmp].toCrit = false;
                }else{
                    user1.skills.vitality -= user2.skills.attack_power * 1.5;
                    punches[tmp].to = user2.skills.attack_power * 1.5;
                    punches[tmp].toCrit = true;
                    punches[tmp].toBlock = false;
                }  
                punches[tmp].toRest = user1.skills.vitality;
            }else{
                if(Math.random()*100 < procentOfSmth(user1.skills.block_chance)){
                    punches[tmp].toBlock = true;
                    punches[tmp].toCrit = false;
                    punches[tmp].to = 0;
                }else{
                    user1.skills.vitality -= user2.skills.attack_power;
                    punches[tmp].to = user2.skills.attack_power;
                    punches[tmp].toCrit = false;
                    punches[tmp].toBlock = false;
                }
                punches[tmp].toRest = user1.skills.vitality;
            }
            if(user1.skills.vitality <= 0){
                return({
                    winner: user2.login,
                    punches: punches
                });
            }
        }
    }
    console.log(fight(userTest1, userTest2));

    expForLvl = lvl => {
        experienceToNextLvl = lvl * 20 + lvl;
        return experienceToNextLvl;
    }
    console.log(expForLvl(30))

    expPerAdventure = (minLvl,userlvl) => {
        return minLvl * 2 + userlvl/3;
    }
    console.log(expPerAdventure(30,30))

    expPerAttack = (result, lvl, enemylvl, roundLength) => {
        if(result){
            return roundLength * 4 + lvl + enemylvl;
        }else{
            return roundLength * 2 + lvl;
        }
    }
    console.log(expPerAttack(true, 50   , 41, 1))

    console.log(procentOfSmth(120) + '%')

    adventure = [
        {
            minLvl: 1,
            name: 'Forest',
            namesOfBeasts: ['wolf', 'worm', 'crown', 'mouse', 'fish']
        },
        {
            minLvl: 5,
            name: 'Sand',
            namesOfBeasts: ['scorpion', 'snake', 'bad cammel', 'sand', 'mummie']
        },
        {
            minLvl: 15,
            name: 'Mountian',
            namesOfBeasts: ['goat', 'farmer', 'yeti', 'snow', 'cannibal']
        },
        {
            minLvl: 30,
            name: 'Vulkan',
            namesOfBeasts: ['dragon', 'magma', 'fire', 'goblin', 'mage']
        },
        {
            minLvl: 50,
            names: 'Overworld',
            namesOfBeasts: [] //todo
        },
        {
            minLvl: 100,
            names: 'Hell',
            namesOfBeasts: []
        },
        {
            minLvl: 150,
            names: 'SecondLvl',
            namesOfBeasts: []
        },
        {
            minLvl: 300,
            names: 'OneStepToHIM',
            namesOfBeasts: []
        },
        {
            minLvl: 500,
            names: 'Lucy',
            namesOfBeasts: ['Lucyfierx']
        }
    ]
    jobs = lvl => {
        pricePerLvl = lvl * 5;
        maxHours = 8;
        return pricePerLvl;
    }
    namesOfWeapons = ['sword', 'axe', 'pickaxe', 'spear', 'mace', 'bow'];
    typesOfWeapons = ['iron', 'gold', 'deadric', 'orcish', 'elwen', 'steel', 'bone', 'dragonbone'];
    namesOfArmor = ['helmet', 'boots', 'shield', 'gloves', 'pants', 'chestplate'];
    function Weapon(level = 1){
        this.minLevel = level;
        this.name = typesOfWeapons[Math.floor(Math.random() * typesOfWeapons.length)] + ' ' + namesOfWeapons[Math.floor(Math.random() * namesOfWeapons.length)];
        this.skills = {
            attack_power: Math.floor(Math.random() * this.minLevel * 10),
            vitality: Math.floor(Math.random() * this.minLevel * 40),
            critical_chance: Math.floor(Math.random() * this.minLevel * 2),
            block_chance: Math.floor(Math.random() * this.minLevel * 2)
        }
        this.price = Math.floor((this.skills.attack_power * 1.2 + this.skills.vitality * 1.15 + this.skills.critical_chance * 1.5 + this.skills.block_chance * 1.5) * 1.2);
    }
    function Armor(level = 1){
        this.minLevel = level;
        this.name = typesOfWeapons[Math.floor(Math.random() * typesOfWeapons.length)] + ' ' + namesOfArmor[Math.floor(Math.random() * namesOfWeapons.length)];
        this.skills = {
            attack_power: Math.floor(Math.random() * this.minLevel * 5),
            vitality: Math.floor(Math.random() * this.minLevel * 55),
            critical_chance: Math.floor(Math.random() * this.minLevel * 1.5),
            block_chance: Math.floor(Math.random() * this.minLevel * 5)
        }
        this.price = Math.floor((this.skills.attack_power * 1.2 + this.skills.vitality * 1.15 + this.skills.critical_chance * 1.5 + this.skills.block_chance * 1.5) * 1.2);
    }
    addEventListener('DOMContentLoaded', () => {
        for(let x = 0; x < 200; x++){
            weapon = new Weapon(Math.floor(Math.random()*100));
            if(weapon.minLevel > 50){
                //console.log(weapon)
                let tmp = document.createElement('li');
                tmp.innerHTML = '<strong>' + weapon.name + '</strong>' + '<sub> Lvl. ' + weapon.minLevel + '</sub>' + ' <ul>Statistic: <li>Attack power:  ' + weapon.skills.attack_power + '</li><li>Vitality:  ' + weapon.skills.vitality + '</li><li>Critical chance:  ' + weapon.skills.critical_chance + '</li><li>Block chance  ' + weapon.skills.block_chance + '</li> </ul> <strong>Price: $' + weapon.price +  ' </strong>';
                document.getElementById('list').appendChild(tmp);
            }
        }
        for(let x = 0; x < 200; x++){
            armor = new Armor(Math.floor(Math.random()*100));
            if(armor.minLevel > 50){
                //console.log(armor)
                let tmp = document.createElement('li');
                tmp.innerHTML = '<strong>' + armor.name + '</strong>' + '<sub> Lvl. ' + armor.minLevel + '</sub>' + ' <ul>Statistic: <li>Attack power:  ' + armor.skills.attack_power + '</li><li>Vitality:  ' + armor.skills.vitality + '</li><li>Critical chance:  ' + armor.skills.critical_chance + '</li><li>Block chance  ' + armor.skills.block_chance + '</li> </ul> <strong>Price: $' + armor.price +  ' </strong>';
                document.getElementById('list1').appendChild(tmp);
            }
        }
    })
    
})()