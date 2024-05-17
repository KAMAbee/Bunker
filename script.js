const roll_button = document.getElementById('roll-button');
let ProfessionCard = document.getElementById('ProfCard');
let AgeCard = document.getElementById('AgeCard');
let GenderCard = document.getElementById('GenderCard');
let HealthCard = document.getElementById('HealthCard');
let PhobiaCard = document.getElementById('PhobiaCard');
let CharCard = document.getElementById('CharacterCard');
let BaggageCard = document.getElementById('BaggageCard');
let cards = document.querySelectorAll('.card');


roll_button.onclick = function() {
    RollProfession();
    RollAge();
    RollGender();
    RollHealth();
    RollPhobia();
    RollCharacter();
    RollHobby();
    RollBaggage();
    reset();
}

function RollProfession(){
    const ProfSet = ["Streamer", "Lawyer", "Cooker", "Banker", "Model", "YouTuber", "Trainer", 
    "Clown", "Biologist", "Teacher", "Unemployed", "Doctor", "Surgeon", "Policeman", "Programmer",
    "Designer", "Rescuer", "Driver", "Deliveryman", "Farmer", "Agronomist", "Obstetrician", "Actor",
    "Archaeologist", "Astrologer", "Ecologist", "Miner", "Vet", "Hacker", "Stealer", "Gamer",
    "Stealer", "Gynecologist", "Street cleaner", "Engineer", "Killer", "Comic", "Astronaut", 
    "Mechanic", "Musician", "Security", "Businessman", "Hunter", "Translator", "Carpenter", 
    "President", "Consul", "Builder", "Gardener", "Plumber", "Welder", "Locksmith", "Solder"];
    let PL = ProfSet.length - 1;
    let ProfRand = Math.floor(Math.random() * PL);
    ProfessionCard.innerHTML = `${ProfSet[ProfRand]}`;
}

function RollGender(){
    let MF = Math.floor(Math.random() * 100);
    let OrientRand = Math.floor(Math.random() * 100);
    let gender = '';
    let orientation = '';
    if (MF >= 50){
        gender = 'Male';
    }
    else{
        gender = 'Female';
    }
    if(OrientRand <= 50){
        orientation = "Heterosexual";
    }
    else if(OrientRand > 50 && OrientRand <= 60){
        orientation = 'Homosexual';
    }
    else if(OrientRand > 60 && OrientRand <= 80){
        orientation = 'Bisexual';
    }
    else if(OrientRand > 80 && OrientRand <= 90){
        orientation = 'Asexual';
    }
    else{
        orientation = "Heterosexual";
    }
    GenderCard.innerHTML = `${gender}<br>(${orientation})`;
}

function RollAge (){
    let age = Math.floor(Math.random() * 70) + 10;
    AgeCard.innerHTML = `${age}`;
}

function RollHealth(){
   const HealthSet = ["Tuberculosis", "Cholera", "Fever", "AIDS", "Healthy", "Cancer",
   "Schizophrenia", "Delirium", "Psychosis", "Broken Arm", "Broken Leg", "Broken Finger",
   "Healthy", "Epilepsy", "Diabetes", "Chickenpox", "Asthma", "Hepatitis A", "Hepatitis B",
   "Flat feet", "Covid-19", "Depression", "Panic attacks", "Anorexia", "Autism", "ADHD",
   "Diarrhea", "Arrhythmia","Cough", "Healthy", "Hypertension"];
   let HL = HealthSet.length - 1;
   let HealthRand = Math.floor(Math.random() * HL);
    HealthCard.innerHTML = `${HealthSet[HealthRand]}`;
}

function RollPhobia(){
    const PhobiaSet = ["Sociophobia", "Arachnophobia", "Cinophobia", "No Phobias", "Aviophobia","Claustrophobia",
    "Astraphobia","Acrophobia", "Nyctophobia", "Ablutophobia", "Agoraphobia", "Acousticophobia",
    "Apiophobia", "Autophobia", "No Phobias", "Hemophobia", "Gerontophobia", "Zoophobia",
    "Gynophobia", "Homophobia", "Insectophobia", "Dentophobia", "Graophobia","Glossophobia",
    "Heterophobia","Haphephobia","Agoraphobia","No Phobias"];
    let PL = PhobiaSet.length - 1;
    let PhobiaRand = Math.floor(Math.random() * PL);
    PhobiaCard.innerHTML = `${PhobiaSet[PhobiaRand]}`;
}

function RollCharacter(){
    const CharacterSet = ["Kind","Cunning", "Aggressive","Pacifist","Pessimist","Optimist","Active","Passive",
    "Hardworking","Angry","Insolent","Helpful","Flirty","Sloppy","Honest","Deceitful","Fair","Arrogant",
    "Cowardly","Rude","Lazy","Reliable","Brave","Vulgar","Neat","Stingy","Greedy","Impulsive","Reserved",
    "Mean","Stupid","Smart","Persistent","Ambitious","Anxious","Hypocritical","Quiet","Selfish","Dependent",
    "Humble","Frivolous","Serious","Touchy","Disobedient","Hot-tempered","Friendly","Unfriendly"];
    let CL = CharacterSet.length - 1;
    let CharacterRand =  Math.floor(Math.random() * CL);
    CharCard.innerHTML = `${CharacterSet[CharacterRand]}`;
}

function RollHobby(){
    const HobbySet = ["Running", "Reading", "Swimming", "Gaming","Gambling", "Boxing", "Karate", "Bowling",
    "Archeology", "Wrestling", "Parkour", "Snowboarding","Horseback Riding", "Diving", "Surfing", "Gardening",
    "Animal Care", "Fishing", "No Hobbies", "Beekeeping","Programming", "Website Development", "Construction", "Radio Engineering",
    "Tarot Cards", "Astronomy", "Physics", "Chemistry","Biology", "Astrology", "Mathematics", "Leather Work",
    "Wood Work", "Construction", "Drawing", "Playing the Piano","Origami", "Singing", "Dancing", "Sewing",
    "Knitting", "Playing the Guitar", "Collecting Hours", "Golf","Football", "Basketball", "Volleyball", "Playing Cards",
    "Cosplay", "Blogging", "Public Speaking", "Equipment Repair"];
    let HL = HobbySet.length - 1;
    let HobbyRand =  Math.floor(Math.random() * HL);
    HobbyCard.innerHTML = `${HobbySet[HobbyRand]}`;
}

function RollBaggage(){
    const BaggageSet = ["Gold Ingot", "Notepad", "Laptop", "Shotgun", "Pistol", "Pack of Ammo",
    "3 Canned Food", "Bag of Money", "Set of Pens", "Dog Food", "Bouquet of Flowers", "Fishing Rod",
    "Tool Set", "TV", "Dog", "Cat", "Indoor Flower", "Wheat Seeds",
    "Sack of Potatoes", "Knife", "Knife Set", "Cutlery Set", "Water Filter", "Mountaineering Set",
    "Diving Suit", "Broom", "Lighter", "Flashlight", "Book", "Maps",
    "Radio", "Axe", "Pickaxe", "Medicines", "Drugs", "10 Chicken Eggs",
    "5 Liters of Water", "Fireworks", "Loudspeaker", "Bluetooth Speaker", "Telephone", "Headphones",
    "Battery", "Screwdriver", "Machete", "Katana", "AK-47", "Handcuffs",
    "Boxing Gloves", "Kettle", "Microwave", "No Buggage", "Signal Fire", "Power Bank",
    "First Aid Kit", "Spare Shoes", "Welding Machine", "Can of Worms", "5 Soap", "No Buggage",
    "Backpack", "Heater", "Fertilizer", "Fan", "BioToilet", "Toilet Paper"];
    let BL = BaggageSet.length - 1;
    let BaggageRand =  Math.floor(Math.random() * BL);
    BaggageCard.innerHTML = `${BaggageSet[BaggageRand]}`;
}

function toggleTextColor(card) {
    card.classList.toggle('active');
}


function reset(){
    cards.forEach(function(cards){
        cards.classList.remove('active');
    });
}

