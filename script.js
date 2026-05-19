const garden = document.getElementById("garden");

const plantBtn = document.getElementById('plantBtn');
const resetBtn = document.getElementById('resetBtn');

const plantModal = document.getElementById('plantModal');
const closePlantModal = document.getElementById('closePlantModal');
const saveFlowerBtn = document.getElementById('saveFlowerBtn');

const nameInput = document.getElementById('nameInput');
const monthInput = document.getElementById('monthInput');
const dayInput = document.getElementById('dayInput');

const infoModal = document.getElementById('infoModal');
const closeInfoModal = document.getElementById('closeInfoModal');

const infoFlowerImage = document.getElementById('infoFlowerImage');
const infoName = document.getElementById('infoName');
const infoBirthday = document.getElementById('infoBirthday');
const infoBirthFlower = document.getElementById('infoBirthFlower');
const infoMeaning = document.getElementById('infoMeaning');

const emojiButtons = document.querySelectorAll('.emoji-btn');

const gardenRect = garden.getBoundingClientRect();

const gardenWidth = garden.clientWidth;
const gardenHeight = garden.clientHeight;

const flowerLayer = document.getElementById("flowerLayer");

const openMailboxBtn =
  document.getElementById('openMailboxBtn');

const mailboxModal =
  document.getElementById('mailboxModal');

const closeMailboxModal =
  document.getElementById('closeMailboxModal');

const mailboxList =
  document.getElementById('mailboxList');

const sendGreetingBtn =
  document.getElementById('sendGreetingBtn');

const greetingModal =
  document.getElementById('greetingModal');

const closeGreetingModal =
  document.getElementById('closeGreetingModal');

const greetingOptions =
  document.querySelectorAll('.greeting-option');

let selectedGreeting = null;
let senderFlowerIndex = null;
let sendingMode = false;


// 탄생화 데이터 예시
const birthFlowers = {
  "01-01": [
    "수선화",
    "희망"
  ],
  "01-02": [
    "튤립",
    "사랑"
  ],
  "01-03": [
    "장미",
    "순수"
  ],
  "01-04": [
    "데이지",
    "기쁨"
  ],
  "01-05": [
    "백합",
    "순결"
  ],
  "01-06": [
    "라벤더",
    "평온"
  ],
  "01-07": [
    "해바라기",
    "기대"
  ],
  "01-08": [
    "제비꽃",
    "겸손"
  ],
  "01-09": [
    "코스모스",
    "조화"
  ],
  "01-10": [
    "카네이션",
    "감사"
  ],
  "01-11": [
    "아이리스",
    "지혜"
  ],
  "01-12": [
    "수국",
    "진심"
  ],
  "01-13": [
    "목련",
    "존경"
  ],
  "01-14": [
    "벚꽃",
    "새로운 시작"
  ],
  "01-15": [
    "매화",
    "인내"
  ],
  "01-16": [
    "동백",
    "고결함"
  ],
  "01-17": [
    "금잔화",
    "우정"
  ],
  "01-18": [
    "달리아",
    "열정"
  ],
  "01-19": [
    "라일락",
    "첫사랑"
  ],
  "01-20": [
    "프리지아",
    "행복"
  ],
  "01-21": [
    "수선화",
    "희망"
  ],
  "01-22": [
    "튤립",
    "사랑"
  ],
  "01-23": [
    "장미",
    "순수"
  ],
  "01-24": [
    "데이지",
    "기쁨"
  ],
  "01-25": [
    "백합",
    "순결"
  ],
  "01-26": [
    "라벤더",
    "평온"
  ],
  "01-27": [
    "해바라기",
    "기대"
  ],
  "01-28": [
    "제비꽃",
    "겸손"
  ],
  "01-29": [
    "코스모스",
    "조화"
  ],
  "01-30": [
    "카네이션",
    "감사"
  ],
  "01-31": [
    "아이리스",
    "지혜"
  ],
  "02-01": [
    "수국",
    "진심"
  ],
  "02-02": [
    "목련",
    "존경"
  ],
  "02-03": [
    "벚꽃",
    "새로운 시작"
  ],
  "02-04": [
    "매화",
    "인내"
  ],
  "02-05": [
    "동백",
    "고결함"
  ],
  "02-06": [
    "금잔화",
    "우정"
  ],
  "02-07": [
    "달리아",
    "열정"
  ],
  "02-08": [
    "라일락",
    "첫사랑"
  ],
  "02-09": [
    "프리지아",
    "행복"
  ],
  "02-10": [
    "수선화",
    "희망"
  ],
  "02-11": [
    "튤립",
    "사랑"
  ],
  "02-12": [
    "장미",
    "순수"
  ],
  "02-13": [
    "데이지",
    "기쁨"
  ],
  "02-14": [
    "백합",
    "순결"
  ],
  "02-15": [
    "라벤더",
    "평온"
  ],
  "02-16": [
    "해바라기",
    "기대"
  ],
  "02-17": [
    "제비꽃",
    "겸손"
  ],
  "02-18": [
    "코스모스",
    "조화"
  ],
  "02-19": [
    "카네이션",
    "감사"
  ],
  "02-20": [
    "아이리스",
    "지혜"
  ],
  "02-21": [
    "수국",
    "진심"
  ],
  "02-22": [
    "목련",
    "존경"
  ],
  "02-23": [
    "벚꽃",
    "새로운 시작"
  ],
  "02-24": [
    "매화",
    "인내"
  ],
  "02-25": [
    "동백",
    "고결함"
  ],
  "02-26": [
    "금잔화",
    "우정"
  ],
  "02-27": [
    "달리아",
    "열정"
  ],
  "02-28": [
    "라일락",
    "첫사랑"
  ],
  "02-29": [
    "프리지아",
    "행복"
  ],
  "03-01": [
    "수선화",
    "희망"
  ],
  "03-02": [
    "튤립",
    "사랑"
  ],
  "03-03": [
    "장미",
    "순수"
  ],
  "03-04": [
    "데이지",
    "기쁨"
  ],
  "03-05": [
    "백합",
    "순결"
  ],
  "03-06": [
    "라벤더",
    "평온"
  ],
  "03-07": [
    "해바라기",
    "기대"
  ],
  "03-08": [
    "제비꽃",
    "겸손"
  ],
  "03-09": [
    "코스모스",
    "조화"
  ],
  "03-10": [
    "카네이션",
    "감사"
  ],
  "03-11": [
    "아이리스",
    "지혜"
  ],
  "03-12": [
    "수국",
    "진심"
  ],
  "03-13": [
    "목련",
    "존경"
  ],
  "03-14": [
    "벚꽃",
    "새로운 시작"
  ],
  "03-15": [
    "매화",
    "인내"
  ],
  "03-16": [
    "동백",
    "고결함"
  ],
  "03-17": [
    "금잔화",
    "우정"
  ],
  "03-18": [
    "달리아",
    "열정"
  ],
  "03-19": [
    "라일락",
    "첫사랑"
  ],
  "03-20": [
    "프리지아",
    "행복"
  ],
  "03-21": [
    "수선화",
    "희망"
  ],
  "03-22": [
    "튤립",
    "사랑"
  ],
  "03-23": [
    "장미",
    "순수"
  ],
  "03-24": [
    "데이지",
    "기쁨"
  ],
  "03-25": [
    "백합",
    "순결"
  ],
  "03-26": [
    "라벤더",
    "평온"
  ],
  "03-27": [
    "해바라기",
    "기대"
  ],
  "03-28": [
    "제비꽃",
    "겸손"
  ],
  "03-29": [
    "코스모스",
    "조화"
  ],
  "03-30": [
    "카네이션",
    "감사"
  ],
  "03-31": [
    "아이리스",
    "지혜"
  ],
  "04-01": [
    "수국",
    "진심"
  ],
  "04-02": [
    "목련",
    "존경"
  ],
  "04-03": [
    "벚꽃",
    "새로운 시작"
  ],
  "04-04": [
    "매화",
    "인내"
  ],
  "04-05": [
    "동백",
    "고결함"
  ],
  "04-06": [
    "금잔화",
    "우정"
  ],
  "04-07": [
    "달리아",
    "열정"
  ],
  "04-08": [
    "라일락",
    "첫사랑"
  ],
  "04-09": [
    "프리지아",
    "행복"
  ],
  "04-10": [
    "수선화",
    "희망"
  ],
  "04-11": [
    "튤립",
    "사랑"
  ],
  "04-12": [
    "장미",
    "순수"
  ],
  "04-13": [
    "데이지",
    "기쁨"
  ],
  "04-14": [
    "백합",
    "순결"
  ],
  "04-15": [
    "라벤더",
    "평온"
  ],
  "04-16": [
    "해바라기",
    "기대"
  ],
  "04-17": [
    "제비꽃",
    "겸손"
  ],
  "04-18": [
    "코스모스",
    "조화"
  ],
  "04-19": [
    "카네이션",
    "감사"
  ],
  "04-20": [
    "아이리스",
    "지혜"
  ],
  "04-21": [
    "수국",
    "진심"
  ],
  "04-22": [
    "목련",
    "존경"
  ],
  "04-23": [
    "벚꽃",
    "새로운 시작"
  ],
  "04-24": [
    "매화",
    "인내"
  ],
  "04-25": [
    "동백",
    "고결함"
  ],
  "04-26": [
    "금잔화",
    "우정"
  ],
  "04-27": [
    "달리아",
    "열정"
  ],
  "04-28": [
    "라일락",
    "첫사랑"
  ],
  "04-29": [
    "프리지아",
    "행복"
  ],
  "04-30": [
    "수선화",
    "희망"
  ],
  "05-01": [
    "튤립",
    "사랑"
  ],
  "05-02": [
    "장미",
    "순수"
  ],
  "05-03": [
    "데이지",
    "기쁨"
  ],
  "05-04": [
    "백합",
    "순결"
  ],
  "05-05": [
    "라벤더",
    "평온"
  ],
  "05-06": [
    "해바라기",
    "기대"
  ],
  "05-07": [
    "제비꽃",
    "겸손"
  ],
  "05-08": [
    "코스모스",
    "조화"
  ],
  "05-09": [
    "카네이션",
    "감사"
  ],
  "05-10": [
    "아이리스",
    "지혜"
  ],
  "05-11": [
    "수국",
    "진심"
  ],
  "05-12": [
    "목련",
    "존경"
  ],
  "05-13": [
    "벚꽃",
    "새로운 시작"
  ],
  "05-14": [
    "매화",
    "인내"
  ],
  "05-15": [
    "동백",
    "고결함"
  ],
  "05-16": [
    "금잔화",
    "우정"
  ],
  "05-17": [
    "달리아",
    "열정"
  ],
  "05-18": [
    "라일락",
    "첫사랑"
  ],
  "05-19": [
    "프리지아",
    "행복"
  ],
  "05-20": [
    "수선화",
    "희망"
  ],
  "05-21": [
    "튤립",
    "사랑"
  ],
  "05-22": [
    "장미",
    "순수"
  ],
  "05-23": [
    "데이지",
    "기쁨"
  ],
  "05-24": [
    "백합",
    "순결"
  ],
  "05-25": [
    "라벤더",
    "평온"
  ],
  "05-26": [
    "해바라기",
    "기대"
  ],
  "05-27": [
    "제비꽃",
    "겸손"
  ],
  "05-28": [
    "코스모스",
    "조화"
  ],
  "05-29": [
    "카네이션",
    "감사"
  ],
  "05-30": [
    "아이리스",
    "지혜"
  ],
  "05-31": [
    "수국",
    "진심"
  ],
  "06-01": [
    "목련",
    "존경"
  ],
  "06-02": [
    "벚꽃",
    "새로운 시작"
  ],
  "06-03": [
    "매화",
    "인내"
  ],
  "06-04": [
    "동백",
    "고결함"
  ],
  "06-05": [
    "금잔화",
    "우정"
  ],
  "06-06": [
    "달리아",
    "열정"
  ],
  "06-07": [
    "라일락",
    "첫사랑"
  ],
  "06-08": [
    "프리지아",
    "행복"
  ],
  "06-09": [
    "수선화",
    "희망"
  ],
  "06-10": [
    "튤립",
    "사랑"
  ],
  "06-11": [
    "장미",
    "순수"
  ],
  "06-12": [
    "데이지",
    "기쁨"
  ],
  "06-13": [
    "백합",
    "순결"
  ],
  "06-14": [
    "라벤더",
    "평온"
  ],
  "06-15": [
    "해바라기",
    "기대"
  ],
  "06-16": [
    "제비꽃",
    "겸손"
  ],
  "06-17": [
    "코스모스",
    "조화"
  ],
  "06-18": [
    "카네이션",
    "감사"
  ],
  "06-19": [
    "아이리스",
    "지혜"
  ],
  "06-20": [
    "수국",
    "진심"
  ],
  "06-21": [
    "목련",
    "존경"
  ],
  "06-22": [
    "벚꽃",
    "새로운 시작"
  ],
  "06-23": [
    "매화",
    "인내"
  ],
  "06-24": [
    "동백",
    "고결함"
  ],
  "06-25": [
    "금잔화",
    "우정"
  ],
  "06-26": [
    "달리아",
    "열정"
  ],
  "06-27": [
    "라일락",
    "첫사랑"
  ],
  "06-28": [
    "프리지아",
    "행복"
  ],
  "06-29": [
    "수선화",
    "희망"
  ],
  "06-30": [
    "튤립",
    "사랑"
  ],
  "07-01": [
    "장미",
    "순수"
  ],
  "07-02": [
    "데이지",
    "기쁨"
  ],
  "07-03": [
    "백합",
    "순결"
  ],
  "07-04": [
    "라벤더",
    "평온"
  ],
  "07-05": [
    "해바라기",
    "기대"
  ],
  "07-06": [
    "제비꽃",
    "겸손"
  ],
  "07-07": [
    "코스모스",
    "조화"
  ],
  "07-08": [
    "카네이션",
    "감사"
  ],
  "07-09": [
    "아이리스",
    "지혜"
  ],
  "07-10": [
    "수국",
    "진심"
  ],
  "07-11": [
    "목련",
    "존경"
  ],
  "07-12": [
    "벚꽃",
    "새로운 시작"
  ],
  "07-13": [
    "매화",
    "인내"
  ],
  "07-14": [
    "동백",
    "고결함"
  ],
  "07-15": [
    "금잔화",
    "우정"
  ],
  "07-16": [
    "달리아",
    "열정"
  ],
  "07-17": [
    "라일락",
    "첫사랑"
  ],
  "07-18": [
    "프리지아",
    "행복"
  ],
  "07-19": [
    "수선화",
    "희망"
  ],
  "07-20": [
    "튤립",
    "사랑"
  ],
  "07-21": [
    "장미",
    "순수"
  ],
  "07-22": [
    "데이지",
    "기쁨"
  ],
  "07-23": [
    "백합",
    "순결"
  ],
  "07-24": [
    "라벤더",
    "평온"
  ],
  "07-25": [
    "해바라기",
    "기대"
  ],
  "07-26": [
    "제비꽃",
    "겸손"
  ],
  "07-27": [
    "코스모스",
    "조화"
  ],
  "07-28": [
    "카네이션",
    "감사"
  ],
  "07-29": [
    "아이리스",
    "지혜"
  ],
  "07-30": [
    "수국",
    "진심"
  ],
  "07-31": [
    "목련",
    "존경"
  ],
  "08-01": [
    "벚꽃",
    "새로운 시작"
  ],
  "08-02": [
    "매화",
    "인내"
  ],
  "08-03": [
    "동백",
    "고결함"
  ],
  "08-04": [
    "금잔화",
    "우정"
  ],
  "08-05": [
    "달리아",
    "열정"
  ],
  "08-06": [
    "라일락",
    "첫사랑"
  ],
  "08-07": [
    "프리지아",
    "행복"
  ],
  "08-08": [
    "수선화",
    "희망"
  ],
  "08-09": [
    "튤립",
    "사랑"
  ],
  "08-10": [
    "장미",
    "순수"
  ],
  "08-11": [
    "데이지",
    "기쁨"
  ],
  "08-12": [
    "백합",
    "순결"
  ],
  "08-13": [
    "라벤더",
    "평온"
  ],
  "08-14": [
    "해바라기",
    "기대"
  ],
  "08-15": [
    "제비꽃",
    "겸손"
  ],
  "08-16": [
    "코스모스",
    "조화"
  ],
  "08-17": [
    "카네이션",
    "감사"
  ],
  "08-18": [
    "아이리스",
    "지혜"
  ],
  "08-19": [
    "수국",
    "진심"
  ],
  "08-20": [
    "목련",
    "존경"
  ],
  "08-21": [
    "벚꽃",
    "새로운 시작"
  ],
  "08-22": [
    "매화",
    "인내"
  ],
  "08-23": [
    "동백",
    "고결함"
  ],
  "08-24": [
    "금잔화",
    "우정"
  ],
  "08-25": [
    "달리아",
    "열정"
  ],
  "08-26": [
    "라일락",
    "첫사랑"
  ],
  "08-27": [
    "프리지아",
    "행복"
  ],
  "08-28": [
    "수선화",
    "희망"
  ],
  "08-29": [
    "튤립",
    "사랑"
  ],
  "08-30": [
    "장미",
    "순수"
  ],
  "08-31": [
    "데이지",
    "기쁨"
  ],
  "09-01": [
    "백합",
    "순결"
  ],
  "09-02": [
    "라벤더",
    "평온"
  ],
  "09-03": [
    "해바라기",
    "기대"
  ],
  "09-04": [
    "제비꽃",
    "겸손"
  ],
  "09-05": [
    "코스모스",
    "조화"
  ],
  "09-06": [
    "카네이션",
    "감사"
  ],
  "09-07": [
    "아이리스",
    "지혜"
  ],
  "09-08": [
    "수국",
    "진심"
  ],
  "09-09": [
    "목련",
    "존경"
  ],
  "09-10": [
    "벚꽃",
    "새로운 시작"
  ],
  "09-11": [
    "매화",
    "인내"
  ],
  "09-12": [
    "동백",
    "고결함"
  ],
  "09-13": [
    "금잔화",
    "우정"
  ],
  "09-14": [
    "달리아",
    "열정"
  ],
  "09-15": [
    "라일락",
    "첫사랑"
  ],
  "09-16": [
    "프리지아",
    "행복"
  ],
  "09-17": [
    "수선화",
    "희망"
  ],
  "09-18": [
    "튤립",
    "사랑"
  ],
  "09-19": [
    "장미",
    "순수"
  ],
  "09-20": [
    "데이지",
    "기쁨"
  ],
  "09-21": [
    "백합",
    "순결"
  ],
  "09-22": [
    "라벤더",
    "평온"
  ],
  "09-23": [
    "해바라기",
    "기대"
  ],
  "09-24": [
    "제비꽃",
    "겸손"
  ],
  "09-25": [
    "코스모스",
    "조화"
  ],
  "09-26": [
    "카네이션",
    "감사"
  ],
  "09-27": [
    "아이리스",
    "지혜"
  ],
  "09-28": [
    "수국",
    "진심"
  ],
  "09-29": [
    "목련",
    "존경"
  ],
  "09-30": [
    "벚꽃",
    "새로운 시작"
  ],
  "10-01": [
    "매화",
    "인내"
  ],
  "10-02": [
    "동백",
    "고결함"
  ],
  "10-03": [
    "금잔화",
    "우정"
  ],
  "10-04": [
    "달리아",
    "열정"
  ],
  "10-05": [
    "라일락",
    "첫사랑"
  ],
  "10-06": [
    "프리지아",
    "행복"
  ],
  "10-07": [
    "수선화",
    "희망"
  ],
  "10-08": [
    "튤립",
    "사랑"
  ],
  "10-09": [
    "장미",
    "순수"
  ],
  "10-10": [
    "데이지",
    "기쁨"
  ],
  "10-11": [
    "백합",
    "순결"
  ],
  "10-12": [
    "라벤더",
    "평온"
  ],
  "10-13": [
    "해바라기",
    "기대"
  ],
  "10-14": [
    "제비꽃",
    "겸손"
  ],
  "10-15": [
    "코스모스",
    "조화"
  ],
  "10-16": [
    "카네이션",
    "감사"
  ],
  "10-17": [
    "아이리스",
    "지혜"
  ],
  "10-18": [
    "수국",
    "진심"
  ],
  "10-19": [
    "목련",
    "존경"
  ],
  "10-20": [
    "벚꽃",
    "새로운 시작"
  ],
  "10-21": [
    "매화",
    "인내"
  ],
  "10-22": [
    "동백",
    "고결함"
  ],
  "10-23": [
    "금잔화",
    "우정"
  ],
  "10-24": [
    "달리아",
    "열정"
  ],
  "10-25": [
    "라일락",
    "첫사랑"
  ],
  "10-26": [
    "프리지아",
    "행복"
  ],
  "10-27": [
    "수선화",
    "희망"
  ],
  "10-28": [
    "튤립",
    "사랑"
  ],
  "10-29": [
    "장미",
    "순수"
  ],
  "10-30": [
    "데이지",
    "기쁨"
  ],
  "10-31": [
    "백합",
    "순결"
  ],
  "11-01": [
    "라벤더",
    "평온"
  ],
  "11-02": [
    "해바라기",
    "기대"
  ],
  "11-03": [
    "제비꽃",
    "겸손"
  ],
  "11-04": [
    "코스모스",
    "조화"
  ],
  "11-05": [
    "카네이션",
    "감사"
  ],
  "11-06": [
    "아이리스",
    "지혜"
  ],
  "11-07": [
    "수국",
    "진심"
  ],
  "11-08": [
    "목련",
    "존경"
  ],
  "11-09": [
    "벚꽃",
    "새로운 시작"
  ],
  "11-10": [
    "매화",
    "인내"
  ],
  "11-11": [
    "동백",
    "고결함"
  ],
  "11-12": [
    "금잔화",
    "우정"
  ],
  "11-13": [
    "달리아",
    "열정"
  ],
  "11-14": [
    "라일락",
    "첫사랑"
  ],
  "11-15": [
    "프리지아",
    "행복"
  ],
  "11-16": [
    "수선화",
    "희망"
  ],
  "11-17": [
    "튤립",
    "사랑"
  ],
  "11-18": [
    "장미",
    "순수"
  ],
  "11-19": [
    "데이지",
    "기쁨"
  ],
  "11-20": [
    "백합",
    "순결"
  ],
  "11-21": [
    "라벤더",
    "평온"
  ],
  "11-22": [
    "해바라기",
    "기대"
  ],
  "11-23": [
    "제비꽃",
    "겸손"
  ],
  "11-24": [
    "코스모스",
    "조화"
  ],
  "11-25": [
    "카네이션",
    "감사"
  ],
  "11-26": [
    "아이리스",
    "지혜"
  ],
  "11-27": [
    "수국",
    "진심"
  ],
  "11-28": [
    "목련",
    "존경"
  ],
  "11-29": [
    "벚꽃",
    "새로운 시작"
  ],
  "11-30": [
    "매화",
    "인내"
  ],
  "12-01": [
    "동백",
    "고결함"
  ],
  "12-02": [
    "금잔화",
    "우정"
  ],
  "12-03": [
    "달리아",
    "열정"
  ],
  "12-04": [
    "라일락",
    "첫사랑"
  ],
  "12-05": [
    "프리지아",
    "행복"
  ],
  "12-06": [
    "수선화",
    "희망"
  ],
  "12-07": [
    "튤립",
    "사랑"
  ],
  "12-08": [
    "장미",
    "순수"
  ],
  "12-09": [
    "데이지",
    "기쁨"
  ],
  "12-10": [
    "백합",
    "순결"
  ],
  "12-11": [
    "라벤더",
    "평온"
  ],
  "12-12": [
    "해바라기",
    "기대"
  ],
  "12-13": [
    "제비꽃",
    "겸손"
  ],
  "12-14": [
    "코스모스",
    "조화"
  ],
  "12-15": [
    "카네이션",
    "감사"
  ],
  "12-16": [
    "아이리스",
    "지혜"
  ],
  "12-17": [
    "수국",
    "진심"
  ],
  "12-18": [
    "목련",
    "존경"
  ],
  "12-19": [
    "벚꽃",
    "새로운 시작"
  ],
  "12-20": [
    "매화",
    "인내"
  ],
  "12-21": [
    "동백",
    "고결함"
  ],
  "12-22": [
    "금잔화",
    "우정"
  ],
  "12-23": [
    "달리아",
    "열정"
  ],
  "12-24": [
    "라일락",
    "첫사랑"
  ],
  "12-25": [
    "프리지아",
    "행복"
  ],
  "12-26": [
    "수선화",
    "희망"
  ],
  "12-27": [
    "튤립",
    "사랑"
  ],
  "12-28": [
    "장미",
    "순수"
  ],
  "12-29": [
    "데이지",
    "기쁨"
  ],
  "12-30": [
    "백합",
    "순결"
  ]
};


let flowers = JSON.parse(localStorage.getItem('flowers')) || [];
const MIN_DISTANCE = 18;

let currentFlowerIndex = null;


// 초기 렌더링
renderFlowers();


// 꽃 심기 버튼
plantBtn.addEventListener('click', () => {
  plantModal.classList.remove('hidden');
});


// 모달 닫기
closePlantModal.addEventListener('click', () => {
  plantModal.classList.add('hidden');
});

function getRandomPosition() {

  let x, y;
  let valid = false;

  while (!valid) {

    x = Math.random() * 80 + 5;
    y = Math.random() * 50 + 20;

    valid = true;

    for (const flower of flowers) {

      const dx = x - flower.x;
      const dy = y - flower.y;

      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < MIN_DISTANCE) {
        valid = false;
        break;
      }
    }
  }

  return { x, y };
}

// 꽃 저장
saveFlowerBtn.addEventListener('click', () => {

  const name = nameInput.value.trim();
  const month = monthInput.value;
  const day = dayInput.value;

  const key = `${month}-${day}`;


  if (!name || !month || !day) {
    alert('이름과 생일을 입력해주세요.');
    return;
  }

  const flowerData = birthFlowers[key];
  
  const flowerName = flowerData ? flowerData[0] : "기본 꽃";
  const flowerMeaning = flowerData ? flowerData[1] : "행복";


  infoName.textContent = name;

  infoBirthday.textContent =
    `생일 : ${month}월 ${day}일`;

  infoBirthFlower.textContent =
    `탄생화 : ${flowerName}`;

  infoMeaning.textContent =
    `꽃말 : ${flowerMeaning}`;


  const position = getRandomPosition();

  const flower = {
    name,
    month,
    day,
    emotion: 'default',

    greeting: [],
    
    x: position.x,
    y: position.y
  };

  flowers.push(flower);

  saveFlowers();
  renderFlowers();

  nameInput.value = '';
  monthInput.value = '';
  dayInput.value = '';

  plantModal.classList.add('hidden');
});


// 전체 초기화
resetBtn.addEventListener('click', () => {

  const check = confirm('꽃밭을 전체 초기화할까요?');

  if (!check) return;

  flowers = [];

  saveFlowers();
  renderFlowers();
});


// 꽃 렌더링
function renderFlowers() {

  const now = Date.now();

  flowers.forEach(flower => {

  if (!flower.greetings) {
    flower.greetings = [];
  }

  flower.greetings = flower.greetings.filter(msg => {

    const diff =
      Date.now() - msg.createdAt;

    const hours =
      diff / (1000 * 60 * 60);

    return hours < 24;
  });
});

  flowerLayer.innerHTML = '';

  flowers.forEach((flower, index) => {

    const latestGreeting =
      flower.greetings?.[
        flower.greetings.length - 1
      ];

    const flowerDiv = document.createElement('div');
    flowerDiv.className = 'flower';

    flowerDiv.style.left = `${flower.x}%`;
    flowerDiv.style.bottom = `${flower.y}%`;


    let imageSrc = 'images/flower_default.png';

    if (flower.emotion === 'good') {
      imageSrc = 'images/flower_happy.png';
    }

    if (flower.emotion === 'normal') {
      imageSrc = 'images/flower_normal.png';
    }

    if (flower.emotion === 'bad') {
      imageSrc = 'images/flower_sad.png';
    }


    flowerDiv.innerHTML = `

      ${latestGreeting
        ? `
            <div class="message-bubble">

              <div class="message-text">
                💌 ${latestGreeting.sender}: ${latestGreeting.text}
              </div>

            </div>
          `
        : ''
      }

      <img src="${imageSrc}">

      <div class="flower-name">
        ${flower.name}
      </div>
    `;


    flowerDiv.addEventListener('click', () => {

    // 인사 보내는 중
    if (sendingMode) {

      // 자기 자신 제외
      if (index === senderFlowerIndex) {
        alert('다른 친구에게 보내주세요 🌸');
        return;
      }

      if (!flowers[index].greetings) {
        flowers[index].greetings = [];
      }

      flowers[index].greetings.push({

        text: selectedGreeting,

        sender:
          flowers[senderFlowerIndex].name,

        createdAt: Date.now()
      });

      saveFlowers();
      renderFlowers();

      sendingMode = false;
      selectedGreeting = null;
      senderFlowerIndex = null;

      alert('편지를 보냈어요 💌');

      return;
    }

    openInfoModal(index);
  });


    flowerLayer.appendChild(flowerDiv);
  });

  saveFlowers();  
}


// 정보창 열기
function openInfoModal(index) {

  currentFlowerIndex = index;

  const flower = flowers[index];

  infoName.textContent = flower.name;
  infoBirthday.textContent = `${flower.month}월 ${flower.day}일`;


  const key =
    `${flower.month.toString().padStart(2, '0')}-${flower.day.toString().padStart(2, '0')}`;
  
  const birthFlower = birthFlowers[key];


if (birthFlower) {

  infoBirthFlower.textContent =
    `탄생화 : ${birthFlower[0]}`;

  infoMeaning.textContent =
    `꽃말 : ${birthFlower[1]}`;
}

  else {
    infoBirthFlower.textContent = '탄생화 정보 없음';
    infoMeaning.textContent = '';
  }


  let imageSrc = 'images/flower_default.png';

  if (flower.emotion === 'good') {
    imageSrc = 'images/flower_happy.png';
  }

  if (flower.emotion === 'normal') {
    imageSrc = 'images/flower_normal.png';
  }

  if (flower.emotion === 'bad') {
    imageSrc = 'images/flower_sad.png';
  }


  infoFlowerImage.src = imageSrc;


  infoModal.classList.remove('hidden');
}


// 정보창 닫기
closeInfoModal.addEventListener('click', () => {
  infoModal.classList.add('hidden');
});


// 감정 변경
emojiButtons.forEach(button => {

  button.addEventListener('click', () => {

    if (currentFlowerIndex === null) return;

    const emotion = button.dataset.emotion;

    flowers[currentFlowerIndex].emotion = emotion;

    saveFlowers();
    renderFlowers();

    openInfoModal(currentFlowerIndex);
  });
});


// 저장
function saveFlowers() {
  localStorage.setItem('flowers', JSON.stringify(flowers));
}

sendGreetingBtn.addEventListener('click', () => {

  senderFlowerIndex = currentFlowerIndex;

  infoModal.classList.add('hidden');

  greetingModal.classList.remove('hidden');
});

closeGreetingModal.addEventListener('click', () => {

  greetingModal.classList.add('hidden');
});

greetingOptions.forEach(button => {

  button.addEventListener('click', () => {

    selectedGreeting = button.textContent;

    sendingMode = true;

    greetingModal.classList.add('hidden');

    infoModal.classList.add('hidden');

    alert('편지를 보낼 친구 꽃을 눌러주세요 🌸');
  });
});

openMailboxBtn.addEventListener('click', () => {

  const flower =
    flowers[currentFlowerIndex];

  mailboxList.innerHTML = '';

  if (
    !flower.greetings ||
    flower.greetings.length === 0
  ) {

    mailboxList.innerHTML = `
      <p>아직 받은 편지가 없어요</p>
    `;
  }

  else {

    const reversed =
      [...flower.greetings].reverse();

    reversed.forEach(msg => {

      mailboxList.innerHTML += `

        <div class="mail-item">

          <div class="mail-text">
            💌 ${msg.sender}: ${msg.text}
          </div>

        </div>
      `;
    });
  }

  mailboxModal.classList.remove('hidden');
});

closeMailboxModal.addEventListener('click', () => {

  mailboxModal.classList.add('hidden');
});