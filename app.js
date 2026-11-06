const courses = [
  {id:1,title:"Introduction to Web Development",category:"Technology",level:"Beginner",lessons:18,duration:"3h 20m",rating:"4.9",image:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=500&fit=crop",description:"Learn the foundations of HTML, CSS and JavaScript and build your first responsive website."},
  {id:2,title:"Python Programming for Beginners",category:"Technology",level:"Beginner",lessons:22,duration:"4h 10m",rating:"4.8",image:"https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&h=500&fit=crop",description:"Start coding with Python, understand variables and functions, and create useful beginner projects."},
  {id:3,title:"Digital Marketing Essentials",category:"Business",level:"Beginner",lessons:16,duration:"2h 45m",rating:"4.7",image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",description:"Understand social media, content strategy, digital campaigns and how to reach an online audience."},
  {id:4,title:"UI/UX Design Fundamentals",category:"Design",level:"Beginner",lessons:20,duration:"3h 50m",rating:"4.9",image:"https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=500&fit=crop",description:"Discover user-centred design, wireframes, prototypes and the principles of great digital experiences."},
  {id:5,title:"Business and Entrepreneurship",category:"Business",level:"All levels",lessons:14,duration:"2h 30m",rating:"4.8",image:"https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=500&fit=crop",description:"Explore business planning, customer research, budgeting and the basics of starting a small business."},
  {id:6,title:"Productivity and Study Skills",category:"Personal Development",level:"All levels",lessons:12,duration:"1h 55m",rating:"4.6",image:"https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=500&fit=crop",description:"Build better study habits, manage your time and create a practical plan for reaching your goals."}
];

const grid = document.getElementById("courseGrid");
const emptyState = document.getElementById("emptyState");
const searchInput = document.getElementById("courseSearch");
let activeCategory = "All";
let selectedCourse = null;
let authMode = "join";

function renderCourses() {
  const term = searchInput.value.trim().toLowerCase();
  const filtered = courses.filter(course =>
    (activeCategory === "All" || course.category === activeCategory) &&
    (course.title.toLowerCase().includes(term) || course.category.toLowerCase().includes(term) || course.description.toLowerCase().includes(term))
  );
  grid.innerHTML = filtered.map(course => `
    <article class="course-card">
      <div class="course-image"><img src="${course.image}" alt="${course.title}" loading="lazy"><span class="course-tag">${course.category}</span></div>
      <div class="course-content">
        <div class="course-meta"><span>${course.level}</span><span>★ ${course.rating}</span></div>
        <h3>${course.title}</h3>
        <p>${course.description}</p>
        <div class="course-bottom"><strong>${course.lessons} lessons · ${course.duration}</strong><button data-course="${course.id}">View course →</button></div>
      </div>
    </article>`).join("");
  emptyState.hidden = filtered.length !== 0;
}
renderCourses();

function setCategory(category) {
  activeCategory = category;
  document.querySelectorAll("#categoryPills button").forEach(btn => btn.classList.toggle("active", btn.dataset.category === category));
  renderCourses();
  document.getElementById("courses").scrollIntoView({behavior:"smooth"});
}
document.getElementById("categoryPills").addEventListener("click", e => {
  const btn = e.target.closest("button[data-category]");
  if (btn) setCategory(btn.dataset.category);
});
document.querySelectorAll(".dropdown-menu button").forEach(btn => btn.addEventListener("click", () => {
  setCategory(btn.dataset.category);
  document.getElementById("subjectsMenu").classList.remove("open");
}));
document.querySelectorAll(".dropdown-toggle").forEach(btn => btn.addEventListener("click", () => document.getElementById(btn.dataset.menu).classList.toggle("open")));
document.getElementById("searchForm").addEventListener("submit", e => {e.preventDefault(); activeCategory="All"; document.querySelectorAll("#categoryPills button").forEach(b=>b.classList.toggle("active",b.dataset.category==="All")); renderCourses(); document.getElementById("courses").scrollIntoView({behavior:"smooth"});});
searchInput.addEventListener("input", renderCourses);

const menuToggle = document.getElementById("menuToggle");
menuToggle.addEventListener("click", () => {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", nav.classList.contains("open"));
});
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener("click",()=>document.getElementById("navLinks").classList.remove("open")));

const authModal = document.getElementById("authModal");
function openAuth(mode) {
  authMode = mode;
  document.getElementById("modalTitle").textContent = mode === "join" ? "Join GroupBetaEdu" : "Welcome back";
  document.getElementById("modalIntro").textContent = mode === "join" ? "Create your free learner account and start exploring courses." : "Log in to continue your learning journey.";
  document.getElementById("nameLabel").hidden = mode === "login";
  document.getElementById("fullName").required = mode === "join";
  document.getElementById("authSubmit").textContent = mode === "join" ? "Create free account" : "Login";
  document.getElementById("modalSwitch").innerHTML = mode === "join" ? 'Already have an account? <button type="button" id="switchAuth">Login</button>' : 'New to GroupBetaEdu? <button type="button" id="switchAuth">Join for free</button>';
  document.getElementById("formMessage").textContent = "";
  authModal.hidden = false;
  document.getElementById("switchAuth").addEventListener("click",()=>openAuth(mode === "join" ? "login" : "join"));
}
["loginBtn"].forEach(id=>document.getElementById(id).addEventListener("click",()=>openAuth("login")));
["joinBtn","heroJoin","bannerJoin"].forEach(id=>document.getElementById(id).addEventListener("click",()=>openAuth("join")));
document.getElementById("modalClose").addEventListener("click",()=>authModal.hidden=true);
authModal.addEventListener("click",e=>{if(e.target===authModal)authModal.hidden=true;});
document.getElementById("authForm").addEventListener("submit",e=>{
  e.preventDefault();
  const email=document.getElementById("email").value.trim();
  const name=document.getElementById("fullName").value.trim();
  document.getElementById("formMessage").textContent = authMode === "join" ? `Thanks${name ? ", "+name : ""}! Your demo registration form is working.` : `Demo login form submitted for ${email}.`;
  document.getElementById("authForm").reset();
});

const courseModal=document.getElementById("courseModal");
grid.addEventListener("click",e=>{
  const btn=e.target.closest("[data-course]");
  if(!btn)return;
  selectedCourse=courses.find(c=>c.id===Number(btn.dataset.course));
  document.getElementById("courseModalImage").src=selectedCourse.image;
  document.getElementById("courseModalImage").alt=selectedCourse.title;
  document.getElementById("courseModalCategory").textContent=selectedCourse.category;
  document.getElementById("courseModalTitle").textContent=selectedCourse.title;
  document.getElementById("courseModalDescription").textContent=selectedCourse.description;
  document.getElementById("courseModalMeta").textContent=`${selectedCourse.level} · ${selectedCourse.lessons} lessons · ${selectedCourse.duration} · ★ ${selectedCourse.rating}`;
  document.getElementById("enrolMessage").textContent="";
  courseModal.hidden=false;
});
document.getElementById("courseModalClose").addEventListener("click",()=>courseModal.hidden=true);
courseModal.addEventListener("click",e=>{if(e.target===courseModal)courseModal.hidden=true;});
document.getElementById("enrolCourseBtn").addEventListener("click",()=>{
  const enrolled=JSON.parse(localStorage.getItem("gbEnrolled")||"[]");
  if(!enrolled.includes(selectedCourse.id))enrolled.push(selectedCourse.id);
  localStorage.setItem("gbEnrolled",JSON.stringify(enrolled));
  document.getElementById("enrolMessage").textContent="Course added to your demo learning list!";
  showToast("You're enrolled in "+selectedCourse.title);
});
function showToast(message){
  const toast=document.getElementById("toast");toast.textContent=message;toast.classList.add("show");
  clearTimeout(showToast.timer);showToast.timer=setTimeout(()=>toast.classList.remove("show"),2600);
}
document.getElementById("year").textContent=new Date().getFullYear();
document.addEventListener("keydown",e=>{if(e.key==="Escape"){authModal.hidden=true;courseModal.hidden=true;document.querySelectorAll(".dropdown-menu").forEach(m=>m.classList.remove("open"));}});
