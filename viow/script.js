const teamMembers = [
    { name: "عبدالله الزبيدي", role: "رئيس النادي", whatsapp: "https://wa.me/967776212233" },
    { name: "صلاح الدين عبد الوهاب", role: "نائب الرئيس"},
    { name: "فاطمة باثلاث", role: "الأمين العام", whatsapp: "https://wa.me/967737790274" },
    { name: "عبير كليم", role: "مسؤولة العلاقات", whatsapp: "https://wa.me/967730282220" },
    { name: "صفية بونمي", role: "نائبة مسؤولة العلاقات" },
    { name: "حمزة بالسود", role: "مسؤول المالية", whatsapp: "https://wa.me/967716451088" },
    { name: "وزيرة باوزير", role: "نائبة المالية ومسؤول الصندوق" },
    { name: "أسماء باراس", role: "مسؤول البرامج والمشاريع", whatsapp: "https://wa.me/967778532932" },
    { name: "ريم خرصان", role: "نائبة مسؤولة البرامج والمشاريع" },
    { name: "مريم بن بريك", role: "مسؤول الإعلام" },
    { name: "منى لحمدي", role: "نائبة مسؤول الإعلام"},
    { name: "عبدالله صبيح", role: "مسؤول التنظيم" },
     { name: "فاطمة بن بريك", role: "مسؤول التصميم" },
    
];

// Function to render team members
function renderTeamMembers() {
    const teamGrid = document.getElementById('team-grid');
    
    teamMembers.forEach((member, index) => {
        const card = document.createElement('div');
        card.className = 'team-card';
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');
        card.setAttribute('aria-label', 'التواصل مع ' + member.name);
        
        // Only show WhatsApp hint if member has WhatsApp link
        let whatsappHint = '';
        if (member.whatsapp) {
            whatsappHint = `<span class="whatsapp-hint"><i class="fab fa-whatsapp"></i> اضغط للتواصل</span>`;
        }
        
        card.innerHTML = `
            <h2 class="member-name">${member.name}</h2>
            <span class="member-role">${member.role}</span>
            ${whatsappHint}
        `;
        
        // Add click handler only if member has WhatsApp
        if (member.whatsapp) {
            card.addEventListener('click', function() {
                window.open(member.whatsapp, '_blank');
            });
            
            // Add keydown handler for accessibility (Enter and Space)
            card.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    window.open(member.whatsapp, '_blank');
                }
            });
        }
        
        teamGrid.appendChild(card);
    });
}

// Render when page loads
document.addEventListener('DOMContentLoaded', renderTeamMembers);
