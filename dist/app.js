const icon=name=>`<svg class="icon" aria-hidden="true"><use href="#i-${name}"/></svg>`;
const panels={
about:{kicker:'LEARN • CREATE • TOGETHER',title:'เกี่ยวกับโครงการ',body:`<p>PHUTTI ROBOT CAMP 2569 คือพื้นที่แห่งการเรียนรู้และสร้างสรรค์ ผ่านการลงมือพัฒนาหุ่นยนต์ การเขียนโปรแกรม และการแก้ปัญหาร่วมกัน</p><p>ส่งเสริมให้เยาวชนกล้าคิด กล้าทดลอง และนำความรู้ด้านเทคโนโลยีมาสร้างผลงานของตนเอง พร้อมแลกเปลี่ยนประสบการณ์กับเพื่อน ๆ ในสนามแข่งขัน</p><ul><li>ฝึกทักษะการเขียนโปรแกรมและควบคุมหุ่นยนต์</li><li>พัฒนาความคิดสร้างสรรค์และการแก้ปัญหา</li><li>เรียนรู้การทำงานเป็นทีมและน้ำใจนักกีฬา</li></ul>`},
schedule:{kicker:'CAMP SCHEDULE',title:'กำหนดการค่าย',body:`<div class="empty">${icon('time')}<h3>รอประกาศกำหนดการ</h3><p>วัน เวลา สถานที่ และลำดับกิจกรรม<br>จะประกาศเมื่อผู้จัดยืนยันรายละเอียดแล้ว</p></div>`},
rules:{kicker:'RACE INFORMATION',title:'กติกาการแข่งขัน',body:`<p>การแข่งขันประกอบด้วย 2 สนาม เพื่อท้าทายทักษะการควบคุมและการเขียนโปรแกรมหุ่นยนต์</p><div class="track-grid"><div class="track"><span>TRACK 01</span><h3>สนามที่ 1</h3><p>รอประกาศรายละเอียดสนาม</p></div><div class="track"><span>TRACK 02</span><h3>สนามที่ 2</h3><p>รอประกาศรายละเอียดสนาม</p></div></div><div class="notice"><strong>รอกติกาฉบับยืนยันจากผู้จัด</strong>รายละเอียดการจับเวลา การเริ่มใหม่ และเกณฑ์จัดอันดับจะประกาศก่อนการแข่งขัน</div>`},
results:{kicker:'COMPETITION RESULTS',title:'ผลการแข่งขัน',body:`<div class="empty">${icon('trophy')}<h3>ยังไม่มีผลการแข่งขันที่ประกาศ</h3><p>รายชื่อทีม เวลา และอันดับ<br>จะแสดงเมื่อมีการเชื่อมต่อข้อมูลการแข่งขัน</p></div><p class="small-note">ตัวเลขบนหน้าแรกยังไม่ใช่ข้อมูลผลการแข่งขันสด</p>`},
live:{kicker:'RACE CONTROL',title:'ติดตามการแข่งขัน',body:`<div class="notice"><strong>รอประกาศเริ่มการแข่งขัน</strong>ยังไม่มีข้อมูลสถานะการแข่งขันสด</div><div class="track-grid"><div class="track"><span>TRACK 01</span><h3>สนามที่ 1</h3><p>รอข้อมูลจากผู้จัด</p></div><div class="track"><span>TRACK 02</span><h3>สนามที่ 2</h3><p>รอข้อมูลจากผู้จัด</p></div></div><button class="button primary dialog-action" data-panel="results">${icon('chart')}ดูผลการแข่งขัน</button>`},
control:{kicker:'ORGANIZER ACCESS',title:'ศูนย์ควบคุมการแข่งขัน',body:`<div class="empty">${icon('user')}<h3>สำหรับผู้จัดการแข่งขัน</h3><p>ระบบเข้าสู่ระบบและบันทึกผลยังไม่เปิดใช้งาน<br>กรุณาติดต่อผู้จัดค่ายเพื่อขอรายละเอียดการเข้าใช้งาน</p></div>`}
};
const dialog=document.getElementById('info-dialog');
const menu=document.getElementById('main-nav');
const menuToggle=document.querySelector('.menu-toggle');
let lastTrigger=null;
function closeMenu(){menu.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');menuToggle.setAttribute('aria-label','เปิดเมนู')}
function openPanel(key,trigger){const panel=panels[key];if(!panel)return;if(!dialog.open)lastTrigger=trigger;document.getElementById('dialog-kicker').textContent=panel.kicker;document.getElementById('dialog-title').textContent=panel.title;document.getElementById('dialog-content').innerHTML=panel.body;closeMenu();if(!dialog.open)dialog.showModal();document.body.style.overflow='hidden';document.querySelector('.close-dialog').focus()}
document.addEventListener('click',event=>{const trigger=event.target.closest('[data-panel]');if(trigger)openPanel(trigger.dataset.panel,trigger)});
document.querySelector('.close-dialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close()}});
dialog.addEventListener('close',()=>{document.body.style.overflow='';lastTrigger?.focus()});
menuToggle.addEventListener('click',()=>{const opened=menu.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(opened));menuToggle.setAttribute('aria-label',opened?'ปิดเมนู':'เปิดเมนู')});
menu.querySelector('a').addEventListener('click',closeMenu);
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});
