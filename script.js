
const EVENTS = [
  {
    "id": 1,
    "title": "AI & Future Technology Summit",
    "month": 1,
    "date": "2026-01-24",
    "time": "10:00 AM",
    "type": "Conference",
    "venue": "Innovation Auditorium",
    "organizer": "TechNova Club",
    "seats": 180,
    "registered": 132,
    "speaker": "Dr. Ananya Rao",
    "desc": "Explore artificial intelligence, generative AI, responsible innovation and the technologies shaping the next decade."
  },
  {
    "id": 2,
    "title": "Web Development Bootcamp",
    "month": 2,
    "date": "2026-02-14",
    "time": "09:30 AM",
    "type": "Workshop",
    "venue": "Computer Lab A",
    "organizer": "CodeCraft Community",
    "seats": 100,
    "registered": 76,
    "speaker": "Arjun Mehta",
    "desc": "A hands-on workshop covering modern HTML, CSS, JavaScript, responsive design and deployment."
  },
  {
    "id": 3,
    "title": "Cyber Security Awareness Day",
    "month": 3,
    "date": "2026-03-21",
    "time": "11:00 AM",
    "type": "Seminar",
    "venue": "Seminar Hall 2",
    "organizer": "CyberShield Society",
    "seats": 150,
    "registered": 118,
    "speaker": "Karthik Iyer",
    "desc": "Learn practical cybersecurity awareness, password safety, phishing prevention and digital privacy."
  },
  {
    "id": 4,
    "title": "IoT & Smart Campus Expo",
    "month": 4,
    "date": "2026-04-18",
    "time": "10:30 AM",
    "type": "Expo",
    "venue": "Main Exhibition Hall",
    "organizer": "ElectroTech Forum",
    "seats": 250,
    "registered": 201,
    "speaker": "Priya Nair",
    "desc": "Discover smart campus solutions using sensors, microcontrollers, IoT platforms and automation."
  },
  {
    "id": 5,
    "title": "Data Science & Analytics Workshop",
    "month": 5,
    "date": "2026-05-16",
    "time": "09:00 AM",
    "type": "Workshop",
    "venue": "Data Lab",
    "organizer": "DataSphere Club",
    "seats": 90,
    "registered": 64,
    "speaker": "Rahul Krishnan",
    "desc": "Build a foundation in data analysis, visualization, statistics and practical machine learning workflows."
  },
  {
    "id": 6,
    "title": "Startup & Innovation Forum",
    "month": 6,
    "date": "2026-06-20",
    "time": "02:00 PM",
    "type": "Forum",
    "venue": "Innovation Centre",
    "organizer": "LaunchPad Network",
    "seats": 220,
    "registered": 147,
    "speaker": "Meera Joseph",
    "desc": "Meet innovators and learn how ideas become products through problem discovery, prototyping and teamwork."
  },
  {
    "id": 7,
    "title": "Cloud Computing Masterclass",
    "month": 7,
    "date": "2026-07-11",
    "time": "10:00 AM",
    "type": "Masterclass",
    "venue": "Cloud Lab",
    "organizer": "CloudCore",
    "seats": 120,
    "registered": 91,
    "speaker": "Vikram Shah",
    "desc": "Understand cloud architecture, storage, virtual machines, containers and deployment fundamentals."
  },
  {
    "id": 8,
    "title": "Robotics Challenge 2026",
    "month": 8,
    "date": "2026-08-22",
    "time": "09:00 AM",
    "type": "Competition",
    "venue": "Robotics Arena",
    "organizer": "RoboWorks",
    "seats": 300,
    "registered": 244,
    "speaker": "Team RoboWorks",
    "desc": "A practical robotics challenge featuring autonomous systems, sensors, control logic and teamwork."
  },
  {
    "id": 9,
    "title": "UI/UX Design Sprint",
    "month": 9,
    "date": "2026-09-12",
    "time": "10:00 AM",
    "type": "Workshop",
    "venue": "Design Studio",
    "organizer": "PixelLab",
    "seats": 80,
    "registered": 55,
    "speaker": "Nisha Verma",
    "desc": "Learn user research, wireframing, visual hierarchy, prototyping and usability testing."
  },
  {
    "id": 10,
    "title": "Green Technology Conference",
    "month": 10,
    "date": "2026-10-17",
    "time": "10:30 AM",
    "type": "Conference",
    "venue": "Green Innovation Hall",
    "organizer": "EcoTech Collective",
    "seats": 200,
    "registered": 151,
    "speaker": "Dr. S. Hari",
    "desc": "Explore sustainable engineering, renewable energy, smart mobility and technology for a greener future."
  },
  {
    "id": 11,
    "title": "Full Stack Development Hackathon",
    "month": 11,
    "date": "2026-11-14",
    "time": "08:30 AM",
    "type": "Hackathon",
    "venue": "Innovation Arena",
    "organizer": "HackGuild",
    "seats": 180,
    "registered": 126,
    "speaker": "HackGuild Mentors",
    "desc": "Build a working web solution in teams using frontend, backend, APIs and database concepts."
  },
  {
    "id": 12,
    "title": "Year-End Tech & Career Fest",
    "month": 12,
    "date": "2026-12-12",
    "time": "09:30 AM",
    "type": "Career",
    "venue": "Grand Convention Centre",
    "organizer": "CareerConnect",
    "seats": 350,
    "registered": 268,
    "speaker": "Industry Panel",
    "desc": "Connect with companies, attend career talks, explore internships and prepare for the technology job market."
  }
];
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const $ = s => document.querySelector(s);
const CUSTOM_KEY = 'eventhub_custom_events';
const REG_KEY = 'eventhub_registrations';
const readJSON = (key, fallback=[]) => { try { return JSON.parse(localStorage.getItem(key)) || fallback; } catch { return fallback; } };
const customEvents = () => readJSON(CUSTOM_KEY, []);
const ALL_EVENTS = () => [...EVENTS, ...customEvents()];
const registrations = () => readJSON(REG_KEY, []);
const saveRegistrations = rows => localStorage.setItem(REG_KEY, JSON.stringify(rows));
const formatDate = dateStr => new Date(dateStr+'T00:00:00').toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'});
const safe = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function eventCard(e){
  const pct=Math.min(100,Math.round((Number(e.registered||0)/Math.max(1,Number(e.seats||1)))*100));
  const month=MONTHS[new Date(e.date+'T00:00:00').getMonth()];
  return `<article class="card"><div class="card-top"><span class="month">${month} ${new Date(e.date+'T00:00:00').getFullYear()}</span><span class="badge">${safe(e.type)}</span><h3>${safe(e.title)}</h3></div><div class="card-body"><div class="meta"><span>📅 ${formatDate(e.date)} · ${safe(e.time||'Time TBA')}</span><span>📍 ${safe(e.venue)}</span><span>🎤 ${safe(e.speaker||'To be announced')}</span></div><div class="small">${Math.max(0,e.seats-(e.registered||0))} seats remaining</div><div class="seatbar"><div class="seatfill" style="width:${pct}%"></div></div><div class="card-footer"><span class="small">${e.registered||0} / ${e.seats} registered</span><a class="btn btn-primary" href="event-details.html?id=${encodeURIComponent(e.id)}">View Details</a></div></div></article>`;
}
function renderEvents(list,target='#eventList'){const el=$(target);if(!el)return;el.innerHTML=list.length?list.map(eventCard).join(''):`<div class="empty">No events match your search.</div>`;}
function toast(message){const t=$('#toast');if(!t)return;t.textContent=message;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2600);}
function addEvent(e){const rows=customEvents();rows.push(e);localStorage.setItem(CUSTOM_KEY,JSON.stringify(rows));}
function registerEvent(id){const e=ALL_EVENTS().find(x=>String(x.id)===String(id));if(!e)return;const form=$('#eventRegistrationForm');if(form){form.scrollIntoView({behavior:'smooth',block:'center'});return;}location.href=`event-details.html?id=${encodeURIComponent(id)}#register`;}
function submitEventRegistration(id){
 const e=ALL_EVENTS().find(x=>String(x.id)===String(id)); if(!e)return;
 const name=$('#studentName')?.value.trim(), reg=$('#studentRegNo')?.value.trim(), email=$('#studentEmail')?.value.trim(), phone=$('#studentPhone')?.value.trim();
 const errors=[]; if(!/^[a-zA-Z\s]{2,50}$/.test(name||''))errors.push('Enter a valid full name.');
 if(!/^[A-Z0-9]{6,12}$/i.test(reg||''))errors.push('Register number must contain 6–12 letters or numbers.');
 if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email||''))errors.push('Enter a valid email address.');
 if(!/^[6-9]\d{9}$/.test(phone||''))errors.push('Enter a valid 10-digit Indian phone number.');
 const msg=$('#registrationMessage');if(errors.length){if(msg)msg.innerHTML=errors.map(s=>`<div class="error-msg">${s}</div>`).join('');return;}
 const rows=registrations();if(rows.some(r=>String(r.eventId)===String(id)&&r.registerNo.toLowerCase()===reg.toLowerCase())){if(msg)msg.innerHTML='<div class="error-msg">This register number is already registered for this event.</div>';return;}
 if(Number(e.registered||0)>=Number(e.seats)){if(msg)msg.innerHTML='<div class="error-msg">Sorry, this event is full.</div>';return;}
 const ticket='EH-'+Date.now().toString(36).toUpperCase();rows.push({eventId:e.id,eventTitle:e.title,name,registerNo:reg,email,phone,ticket,registeredAt:new Date().toISOString()});saveRegistrations(rows);
 if(!EVENTS.some(x=>String(x.id)===String(id))){const custom=customEvents().map(x=>String(x.id)===String(id)?{...x,registered:(x.registered||0)+1}:x);localStorage.setItem(CUSTOM_KEY,JSON.stringify(custom));}
 else {const count=Number(localStorage.getItem('eventhub_count_'+id)||0)+1;localStorage.setItem('eventhub_count_'+id,String(count));}
 toast('Registration successful! Your ticket is '+ticket);location.href='my-registrations.html';
}
function downloadICS(id){const e=ALL_EVENTS().find(x=>String(x.id)===String(id));if(!e)return;const dt=e.date.replaceAll('-','')+'T100000';const text=`BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nUID:event-${e.id}@eventhub\nDTSTART:${dt}\nSUMMARY:${e.title}\nLOCATION:${e.venue}\nDESCRIPTION:${e.desc||''}\nEND:VEVENT\nEND:VCALENDAR`;const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([text],{type:'text/calendar'}));a.download=e.title.replaceAll(' ','_')+'.ics';a.click();URL.revokeObjectURL(a.href);}
function renderCalendar(month){if(!Number.isInteger(month)||month<1||month>12)month=1;const title=$('#calendarTitle');if(title)title.textContent=MONTHS[month-1]+' 2026';const grid=$('#calendarGrid');if(!grid)return;const firstDay=new Date(2026,month-1,1).getDay(),daysInMonth=new Date(2026,month,0).getDate();let html=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(d=>`<div class="dow">${d}</div>`).join('');for(let i=0;i<firstDay;i++)html+='<div class="day empty"></div>';for(let day=1;day<=daysInMonth;day++){const date=`2026-${String(month).padStart(2,'0')}-${String(day).padStart(2,'0')}`;const matches=ALL_EVENTS().filter(e=>e.date===date);html+=`<div class="day ${matches.length?'event-day':''}"><div class="day-num">${day}</div>${matches.map(e=>`<a class="event-dot" href="event-details.html?id=${encodeURIComponent(e.id)}">${safe(e.title)}</a>`).join('')}</div>`;}grid.innerHTML=html;}
function chatbotReply(q){const s=q.toLowerCase().trim(),events=ALL_EVENTS();if(!s)return'Type a question about events, dates, venues, seats, organizers or registration.';if(/\b(hi|hello|hey)\b/.test(s))return'Hi! I can help you find events, dates, venues, speakers, organizers, seats and registration details.';if(s.includes('how many')&&s.includes('event'))return`There are ${events.length} events in Event Hub.`;let matches=events.filter(e=>(e.title+' '+e.type+' '+e.venue+' '+e.organizer+' '+e.speaker+' '+e.desc).toLowerCase().includes(s));if(!matches.length){const words=s.split(/\s+/).filter(w=>w.length>2);matches=events.filter(e=>words.some(w=>(e.title+' '+e.type+' '+e.venue+' '+e.organizer+' '+e.speaker).toLowerCase().includes(w)));}if(matches.length)return matches.slice(0,4).map(e=>`<b>${safe(e.title)}</b><br>📅 ${formatDate(e.date)} · ${safe(e.time||'TBA')}<br>📍 ${safe(e.venue)}<br>🪑 ${Math.max(0,e.seats-(e.registered||0))} seats available<br><a href="event-details.html?id=${encodeURIComponent(e.id)}">Open event page</a>`).join('<hr>');const mi=MONTHS.findIndex(m=>s.includes(m.toLowerCase()));if(mi>=0){const es=events.filter(e=>new Date(e.date+'T00:00:00').getMonth()===mi);return es.length?es.map(e=>`${safe(e.title)} — ${formatDate(e.date)} at ${safe(e.venue)}`).join('<br>'):'No event found in that month.';}return'I can search all published events, including organizer-created events. Try an event name, month, venue, speaker or organizer.';}
function addMessage(text,who){const box=$('#messages');if(!box)return;const d=document.createElement('div');d.className='msg '+who;d.innerHTML=text;box.appendChild(d);box.scrollTop=box.scrollHeight;}
function sendChat(){const input=$('#chatInput');if(!input)return;const q=input.value.trim();if(!q)return;addMessage(safe(q),'user');input.value='';setTimeout(()=>addMessage(chatbotReply(q),'bot'),180);}
function toggleChat(){$('#chatbox')?.classList.toggle('open');}
function setupTheme(){const nav=$('.nav-actions');if(!nav||$('#themeToggle'))return;const b=document.createElement('button');b.id='themeToggle';b.className='btn btn-light';b.type='button';b.textContent='🌙 Theme';nav.prepend(b);const apply=()=>{const dark=localStorage.getItem('eventhub_theme')==='dark';document.body.classList.toggle('dark-mode',dark);b.textContent=dark?'☀️ Light':'🌙 Dark';};apply();b.addEventListener('click',()=>{localStorage.setItem('eventhub_theme',document.body.classList.contains('dark-mode')?'light':'dark');apply();});}
function setupCalculator(){if($('#calculatorPanel'))return;const fab=document.createElement('button');fab.className='calculator-fab';fab.textContent='🧮 Calculator';fab.type='button';document.body.appendChild(fab);const panel=document.createElement('section');panel.id='calculatorPanel';panel.className='calculator-panel';panel.innerHTML='<div class="calc-head"><b>Quick Calculator</b><button type="button" id="calcClose">×</button></div><input id="calcDisplay" aria-label="Calculator display" readonly value="0"><div class="calc-keys">'+['7','8','9','/','4','5','6','*','1','2','3','-','C','0','=','+'].map(k=>`<button type="button" data-key="${k}">${k}</button>`).join('')+'</div>';document.body.appendChild(panel);fab.onclick=()=>panel.classList.toggle('open');$('#calcClose').onclick=()=>panel.classList.remove('open');let expression='';panel.querySelectorAll('[data-key]').forEach(btn=>btn.onclick=()=>{const k=btn.dataset.key;if(k==='C')expression='';else if(k==='='){try{if(!/^[0-9+*/.() -]+$/.test(expression))throw Error();const result=Function('"use strict";return ('+expression+')')();if(!Number.isFinite(result))throw Error();expression=String(result);}catch{expression='Error';}}else{if(expression==='Error')expression='';expression+=k;}$('#calcDisplay').value=expression||'0';});}
document.addEventListener('DOMContentLoaded',()=>{
 const authPage=['signin.html','signup.html'].includes(location.pathname.split('/').pop());
 if(!authPage && localStorage.getItem('eventhub_session')!=='active'){location.replace('signin.html');return;}
 if(!authPage){const actions=$('.nav-actions')||$('.nav-inner');if(actions){const account=readJSON('eventhub_account',{});const who=document.createElement('span');who.className='nav-user';who.textContent=account.name?`Hi, ${account.name.split(' ')[0]}`:'Welcome';const out=document.createElement('button');out.className='btn btn-light';out.type='button';out.textContent='Logout';out.addEventListener('click',()=>{localStorage.removeItem('eventhub_session');location.href='signin.html';});actions.append(who,out);}}
 setupTheme();setupCalculator();
 const list=$('#eventList');if(list){const search=$('#search'),type=$('#typeFilter'),month=$('#monthFilter'),sort=$('#sort');const run=()=>{let arr=ALL_EVENTS();const q=(search?.value||'').toLowerCase();if(q)arr=arr.filter(e=>(e.title+' '+e.type+' '+e.venue+' '+e.organizer+' '+e.desc).toLowerCase().includes(q));if(type?.value)arr=arr.filter(e=>e.type===type.value);if(month?.value)arr=arr.filter(e=>new Date(e.date+'T00:00:00').getMonth()+1===Number(month.value));if(sort?.value==='date')arr.sort((a,b)=>a.date.localeCompare(b.date));if(sort?.value==='seats')arr.sort((a,b)=>(b.seats-(b.registered||0))-(a.seats-(a.registered||0)));renderEvents(arr);};[search,type,month,sort].forEach(x=>x&&x.addEventListener('input',run));run();}
 const upcoming=$('#upcoming');if(upcoming)renderEvents(ALL_EVENTS().filter(e=>e.date>=new Date().toISOString().slice(0,10)).slice(0,6),'#upcoming');
 const monthGrid=$('#monthGrid');if(monthGrid)monthGrid.innerHTML=MONTHS.map((m,i)=>{const es=ALL_EVENTS().filter(e=>new Date(e.date+'T00:00:00').getMonth()===i);return `<a class="month-card" href="calendar.html?month=${i+1}"><h3>${m}</h3>${es.map(e=>`<div class="event-date">${formatDate(e.date)} · ${safe(e.time||'TBA')}</div><p>${safe(e.title)}</p>`).join('')||'<p>No events yet</p>'}</a>`;}).join('');
 $('#menuBtn')?.addEventListener('click',()=>$('#navLinks')?.classList.toggle('open'));
 const params=new URLSearchParams(location.search),id=params.get('id'),details=$('#detailsPage');if(details&&id){const e=ALL_EVENTS().find(x=>String(x.id)===id);if(!e){details.innerHTML='<div class="empty">Event not found. Please return to All Events.</div>';}else{const count=Number(localStorage.getItem('eventhub_count_'+id)||0),registered=(e.registered||0)+count,pct=Math.min(100,Math.round(registered/e.seats*100));details.innerHTML=`<div class="panel"><span class="eyebrow" style="color:#4f46e5;background:#eef2ff;border:0">${safe(e.type)} · ${formatDate(e.date)}</span><h1>${safe(e.title)}</h1><p class="desc">${safe(e.desc||'Join this event to learn, connect and collaborate.')}</p><div class="info-list"><div class="info-row"><b>📅 Date</b><span>${formatDate(e.date)}</span></div><div class="info-row"><b>⏰ Time</b><span>${safe(e.time||'To be announced')}</span></div><div class="info-row"><b>📍 Venue</b><span>${safe(e.venue)}</span></div><div class="info-row"><b>🎤 Speaker</b><span>${safe(e.speaker||'To be announced')}</span></div><div class="info-row"><b>👤 Organizer</b><span>${safe(e.organizer)}</span></div></div><button class="btn btn-primary" id="showRegistration">Register Now</button><form id="eventRegistrationForm" class="registration-form" novalidate><h2>Student Registration</h2><p class="desc">Enter your details to reserve your seat.</p><div class="field"><label for="studentName">Full Name</label><input id="studentName" required placeholder="Enter your full name"></div><div class="field"><label for="studentRegNo">Register Number</label><input id="studentRegNo" required placeholder="Enter register number"></div><div class="field"><label for="studentEmail">Email Address</label><input id="studentEmail" type="email" required placeholder="name@example.com"></div><div class="field"><label for="studentPhone">Phone Number</label><input id="studentPhone" type="tel" required placeholder="10-digit mobile number" maxlength="10"></div><div id="registrationMessage" aria-live="polite"></div><button class="btn btn-primary" type="submit">Confirm Registration</button></form></div><div class="panel"><h2>Seat Availability</h2><p style="margin:10px 0">${Math.max(0,e.seats-registered)} seats available out of ${e.seats}</p><div class="seatbar"><div class="seatfill" style="width:${pct}%"></div></div><hr style="margin:24px 0;border:0;border-top:1px solid #e5e7eb"><h3>Add to Calendar</h3><p class="small" style="margin:8px 0 15px">Save this event to your calendar.</p><button class="btn btn-light" onclick="downloadICS('${String(e.id).replace(/'/g,'')}')">📅 Download .ics</button></div>`;$('#showRegistration').onclick=()=>$('#eventRegistrationForm').classList.toggle('open');$('#eventRegistrationForm').onsubmit=ev=>{ev.preventDefault();submitEventRegistration(id);};if(location.hash==='#register')$('#eventRegistrationForm').classList.add('open');}}
 const calendar=$('.calendar');if(calendar){let current=Number(new URLSearchParams(location.search).get('month'))||1;const show=()=>renderCalendar(current);$('#prevMonth')?.addEventListener('click',()=>{current=current===1?12:current-1;show();});$('#nextMonth')?.addEventListener('click',()=>{current=current===12?1:current+1;show();});show();}
 const create=$('#createForm');if(create)create.addEventListener('submit',ev=>{ev.preventDefault();const date=$('#newDate').value;const e={id:'custom-'+Date.now(),title:$('#newTitle').value.trim(),date,month:new Date(date+'T00:00:00').getMonth()+1,time:$('#newTime').value, type:$('#newType').value,venue:$('#newVenue').value.trim(),organizer:$('#newOrg').value.trim(),seats:Number($('#newSeats').value),registered:0,speaker:$('#newSpeaker').value.trim()||'To be announced',desc:$('#newDesc').value.trim()};addEvent(e);toast('Event created and published successfully!');setTimeout(()=>location.href='events.html',700);});
 const regsBox=$('#regs');if(regsBox){const rows=registrations();regsBox.innerHTML=rows.length?rows.map(r=>{const e=ALL_EVENTS().find(x=>String(x.id)===String(r.eventId));return `<article class="card"><div class="card-top"><span class="month">CONFIRMED</span><h3>${safe(r.eventTitle)}</h3></div><div class="card-body"><div class="meta"><span>👤 ${safe(r.name)}</span><span>🪪 ${safe(r.registerNo)}</span><span>📧 ${safe(r.email)}</span><span>📞 ${safe(r.phone)}</span><span>🎟️ Ticket: ${safe(r.ticket)}</span>${e?`<span>📅 ${formatDate(e.date)} · ${safe(e.venue)}</span>`:''}</div><a class="btn btn-primary" href="event-details.html?id=${encodeURIComponent(r.eventId)}">Open Event</a></div></article>`;}).join(''):'<div class="empty" style="grid-column:1/-1">No registrations yet. Explore an event and click Register Now.</div>';}
 const dashboard=$('#organizerStats');if(dashboard){const es=ALL_EVENTS(),regs=registrations().length,seats=es.reduce((n,e)=>n+Number(e.seats||0),0);dashboard.innerHTML=`<div class="panel"><div class="small">TOTAL EVENTS</div><h2>${es.length}</h2><p class="desc">Across all months</p></div><div class="panel"><div class="small">TOTAL SEATS</div><h2>${seats.toLocaleString('en-IN')}</h2><p class="desc">Available capacity</p></div><div class="panel"><div class="small">REGISTRATIONS</div><h2>${regs.toLocaleString('en-IN')}</h2><p class="desc">Student registrations</p></div>`;}
 const accountForm=$('#accountRegisterForm');if(accountForm)accountForm.addEventListener('submit',ev=>{ev.preventDefault();const name=$('#accountName').value.trim(),email=$('#accountEmail').value.trim(),password=$('#accountPassword').value,confirm=$('#accountConfirm').value,msg=$('#signupMessage');if(name.length<2||!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)||password.length<6||password!==confirm){msg.textContent='Please enter your name and a valid email. Passwords must be at least 6 characters and match.';msg.className='error-msg';return;}localStorage.setItem('eventhub_account',JSON.stringify({name,email,password}));msg.textContent='Account created. Please sign in.';msg.className='success-msg';setTimeout(()=>location.href='signin.html',650);});
 const login=$('#signinForm');if(login)login.addEventListener('submit',ev=>{ev.preventDefault();const saved=readJSON('eventhub_account',{}),email=$('#loginEmail').value.trim(),pass=$('#loginPassword').value,msg=$('#loginMessage');if(saved.email===email&&saved.password===pass){localStorage.setItem('eventhub_session','active');msg.textContent='Sign in successful. Welcome to Event Hub!';msg.className='success-msg';setTimeout(()=>location.href='index.html',350);}else{msg.textContent='Email or password is incorrect. Please sign up if you are new.';msg.className='error-msg';}});
 $('#togglePassword')?.addEventListener('click',()=>{const f=$('#loginPassword');f.type=f.type==='password'?'text':'password';});
});
