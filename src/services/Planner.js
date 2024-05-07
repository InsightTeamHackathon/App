export function generateTourismPlan(data) {
    const activitiesData = {
        Farm: [
            { name: "مزرعة ورد 1", period: "ساعتين", img: "/images/farm/main.svg", visitors: 150, rating: 4.8 },
            { name: "مزرعة ورد 2", period: "ساعة ونصف", img: "/images/farm/main.svg", visitors: 200, rating: 4.6 },
            { name: "مزرعة ورد 3", period: "ساعتين", img: "/images/farm/main.svg", visitors: 250, rating: 4.9 },
            { name: "مزرعة ورد 4", period: "ثلاث ساعات", img: "/images/farm/main.svg", visitors: 180, rating: 4.7 },
            { name: "مزرعة ورد 5", period: "ساعتين", img: "/images/farm/main.svg", visitors: 160, rating: 4.5 },
            { name: "مزرعة ورد 6", period: "ساعة", img: "/images/farm/main.svg", visitors: 140, rating: 4.3 },
            { name: "مزرعة ورد 7", period: "ساعتين ونصف", img: "/images/farm/main.svg", visitors: 230, rating: 4.6 }
        ],
        Factory: [
            { name: "مصنع للورد الطائفي 1", period: "ثلاث ساعات", img: "/images/farm/second.svg", visitors: 250, rating: 4.7 },
            { name: "مصنع للورد الطائفي 2", period: "ساعتين", img: "/images/farm/second.svg", visitors: 300, rating: 4.8 },
            { name: "مصنع للورد الطائفي 3", period: "ثلاث ساعات", img: "/images/farm/second.svg", visitors: 220, rating: 4.6 },
            { name: "مصنع للورد الطائفي 4", period: "ساعتين", img: "/images/farm/second.svg", visitors: 190, rating: 4.4 },
            { name: "مصنع للورد الطائفي 5", period: "ثلاث ساعات", img: "/images/farm/second.svg", visitors: 210, rating: 4.5 },
            { name: "مصنع للورد الطائفي 6", period: "ساعة ونصف", img: "/images/farm/second.svg", visitors: 330, rating: 4.9 },
            { name: "مصنع للورد الطائفي 7", period: "ثلاث ساعات", img: "/images/farm/second.svg", visitors: 280, rating: 4.7 }
        ],
        Shopping: [
            { name: "محل عطور 1", period: "ساعة ونصف", img: "/images/farm/third.svg", visitors: 1000, rating: 4.8 },
            { name: "أسر منتجة 1", period: "ثلاث ساعات", img: "/images/farm/third.svg", visitors: 800, rating: 4.7 },
            { name: "محل عطور 2", period: "ساعة ونصف", img: "/images/farm/third.svg", visitors: 1100, rating: 4.9 },
            { name: "أسر منتجة 2", period: "ثلاث ساعات", img: "/images/farm/third.svg", visitors: 900, rating: 4.6 },
            { name: "محل عطور 3", period: "ساعتين", img: "/images/farm/third.svg", visitors: 950, rating: 4.8 },
            { name: "أسر منتجة 3", period: "ساعتين", img: "/images/farm/third.svg", visitors: 700, rating: 4.4 },
            { name: "محل عطور 4", period: "ساعتين", img: "/images/farm/third.svg", visitors: 1200, rating: 4.7 }
        ],
        Museum: [
            { name: "متحف 1", period: "ساعتين", img: "/images/farm/main.svg", visitors: 500, rating: 4.9 },
            { name: "متحف 2", period: "ثلاث ساعات", img: "/images/farm/main.svg", visitors: 600, rating: 4.8 },
            { name: "متحف 3", period: "ساعتين", img: "/images/farm/main.svg", visitors: 550, rating: 4.7 },
            { name: "متحف 4", period: "ساعة ونصف", img: "/images/farm/main.svg", visitors: 800, rating: 4.6 },
            { name: "متحف 5", period: "ساعة ونصف", img: "/images/farm/main.svg", visitors: 450, rating: 4.8 },
            { name: "متحف 6", period: "ساعتين", img: "/images/farm/main.svg", visitors: 350, rating: 4.5 },
            { name: "متحف 7", period: "ثلاث ساعات", img: "/images/farm/main.svg", visitors: 600, rating: 4.6 }
        ],
        KidActivities: [
            { name: "ألعاب أطفال 1", period: "يوم كامل", img: "/images/farm/second.svg", visitors: 1500, rating: 4.9 },
            { name: "ألعاب أطفال 2", period: "ساعتين", img: "/images/farm/second.svg", visitors: 400, rating: 4.7 },
            { name: "ألعاب أطفال 3", period: "ثلاث ساعات", img: "/images/farm/second.svg", visitors: 450, rating: 4.8 },
            { name: "ألعاب أطفال 4", period: "يوم كامل", img: "/images/farm/second.svg", visitors: 800, rating: 4.9 },
            { name: "ألعاب أطفال 5", period: "ساعة ونصف", img: "/images/farm/second.svg", visitors: 700, rating: 4.7 },
            { name: "ألعاب أطفال 6", period: "ثلاث ساعات", img: "/images/farm/second.svg", visitors: 600, rating: 4.6 },
            { name: "ألعاب أطفال 7", period: "يوم كامل", img: "/images/farm/second.svg", visitors: 1000, rating: 4.8 }
        ]
    };
    
      
    const getUniqueActivities = (activityTypeArray, selected) => {
      let availableActivities = activityTypeArray.filter(act => !selected.includes(act.name));
      return availableActivities[Math.floor(Math.random() * availableActivities.length)];
    };
  
    const days = data.dates;
    let plan = {};
    let selectedActivityNames = [];
    let additionalCosts = {
        total: 0,
        details: []
    };
  
    for (let i = 1; i <= days; i++) {
      plan[`Day ${i}`] = data.activities.map(id => {
        switch (id) {
          case 1:
            return getUniqueActivities(activitiesData.Farm, selectedActivityNames);
          case 2:
            return getUniqueActivities(activitiesData.Factory, selectedActivityNames);
          case 3:
            return getUniqueActivities(activitiesData.Shopping, selectedActivityNames);
          case 4:
            return getUniqueActivities(activitiesData.Museum, selectedActivityNames);
          case 5:
            return getUniqueActivities(activitiesData.KidActivities, selectedActivityNames);
          default:
            return {};
        }
      }).filter(activity => {
        if (activity) {
          selectedActivityNames.push(activity.name);
          return true;
        }
        return false;
      });
    }

    if (data.vehicle === "Yes") {
        additionalCosts.total += 50;
        additionalCosts.details.push({ item: "Vehicle", cost: 50 });
    }
    if (data.meals === "Yes") {
        additionalCosts.total += 50;
        additionalCosts.details.push({ item: "Meals", cost: 50 });
    }
    if (data.guide === "Yes") {
        additionalCosts.total += 50;
        additionalCosts.details.push({ item: "Guide", cost: 50 });
    }
    
    return {
      plan: plan,
      additionalCosts: additionalCosts
    };
  }
  