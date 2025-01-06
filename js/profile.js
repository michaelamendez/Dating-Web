document.addEventListener("DOMContentLoaded", function() {
  
  //Get the query parameter from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('p');
  
  //Use the productId to fetch a display the corresponding profile information
  const profileContent = document.querySelector('.profile-info');
  
  //Example: You can customize this part to load profile data based on the productId
  if(productId) {
    //Assuming you have an array of profile or an API to fetch profile data
    
    const profileData = getProfileData(productId);
    if(profileData) {
      
      //Display the profile information
      profileContent.innerHTML =`
      <img src="${profileData.image}" alt="Profile Image" style="width:45%; height:auto;">
      <h3>${profileData.fullName}</h3>
            <div class="basic-info">
               <h4>Basic Information</h4>
               <p>Name: ${profileData.fullName}</p>
               <p>Age: ${profileData.age}</p>
               <p>Gender: ${profileData.gender}</p>
               <p>Location: ${profileData.location}</p>
               <p>Education: ${profileData.education}</p>
            </div>
            
            <div class="about-info">
               <h4>About Me</h4>
               <p>Physical Appearance: ${profileData.physicalAppearance}</p>
               <p>Personality: ${profileData.personality}</p>
               <p>Hobbies and Interest: ${profileData.hobbies}</p>
               <p>Goals: ${profileData.goals}</p>
            </div>
            
            <div class="look-info">
               <h4>Looking for:</h4>
               <p>Age Range: ${profileData.ageRange}</p>
               <p>Gender: ${profileData.lookingForGender}</p>
               <p>Location: ${profileData.lookingForLocation}</p>
               <p>Relationship Status: ${profileData.relationshipStatus}</p>
            </div>
      `;
      
      // Add this code to your profile.js
      document.addEventListener("DOMContentLoaded", function() {
       const profileContent = document.querySelector('.profile-info');

        profileContent.addEventListener('click', function () {
          // Toggle the 'expanded' class on click
        this.classList.toggle('expanded');
   });
});

    }
    else {
      profileContent.innerHTML = "<p>Profile not found</p>";
    }
  }
  else {
    profileContent.innerHTML ="<p>No profile selected</p>";
  }
});

//Example function to simulate fetching profile data
function getProfileData(productId){
  
  //Replace this with your actual data fetching logic
  const profiles = {
    'p-1': {
      fullName: 'Kathryn Chandria Manuel Bernardo',
         image: 'img/kat.jpg',
         age: 28,
         gender: 'Female',
         location: 'Antipolo City',
         education: 'Marketing(Enderun Colleges)',
         physicalAppearance: 'Long flowing brown hair, bright and  brown eyes.',
         personality: 'Kind, Compassionate, artistic, and  strong-willed.',
         hobbies: 'skateboarding.',
         goals: 'IF OTHERS CAN, WHY CAN`T I.',
         ageRange: '20-30',
         lookingForGender: 'Male',
         lookingForLocation: 'Any',
         relationshipStatus: 'Single'
    },
    
    'p-2': {
      fullName: 'Daniel John Elago Ford',
         image: 'img/dan.jpg',
         age: 29,
         gender: 'Male',
         location: 'Quezon City.',
         education: 'UST Angelicum College.',
         physicalAppearance: 'Athletic build, and 5`11 feet tall.',
         personality: 'Friendly and outgoing.',
         hobbies: 'skate, travel, listen to bands, and play basketball, golf, and badminton.',
         goals: 'Advance in career, travel the world.',
         ageRange: '20-30',
         lookingForGender: 'Female',
         lookingForLocation: 'Any',
         relationshipStatus: 'Single'
    },
    
    'p-3': {
      fullName: 'Richard Reyes Faulkerson Jr.',
         image: 'img/al.jpg',
         age: 32,
         gender: 'Male',
         location: ' Biñan Laguna .',
         education: 'Colegio de Santa Rosa.',
         physicalAppearance: 'Lean and stronger physique, dark brown hair and brown eyes.',
         personality: 'Charismatic, Positive, Loyal, Responsible, and Hardworking.',
         hobbies: 'Playing mobile games, Action figure collecting.',
         goals: 'Finish My Studies',
         ageRange: '20-30',
         lookingForGender: 'Female',
         lookingForLocation: 'Any',
         relationshipStatus: 'Single'
    },
    
    'p-4': {
      fullName: 'Hope Elizabeth Soberano',
         image: 'img/liz.jpg',
         age: 26,
         gender: 'Female',
         location: 'Los Angeles .',
         education: 'Southville International School Affiliated with Foreign universities(SISFU).',
         physicalAppearance: 'Angelic eyes, symmetrical features, a refined nose, and lips.',
         personality: 'hunger for growth and excitement.',
         hobbies: 'Grocery shopping, cooking, and doing home repairs.',
         goals: 'Be a successful.',
         ageRange: '20-30',
         lookingForGender: 'Male',
         lookingForLocation: 'Any',
         relationshipStatus: 'Single'
    },
    
    'p-5': {
      fullName: 'Enrique Mari Bacay Gil',
         image: 'img/gil.jpg',
         age: 32,
         gender: 'Male',
         location: 'Cebu City.',
         education: 'Degree in Business Management (San Beda College Alabang).',
         physicalAppearance: 'Messy dark blonde hair, brown eyes, slight beard and muscular build.',
         personality: 'outgoing and energetic.',
         hobbies: 'Reading, traveling',
         goals: 'Be a successful businessman and make a difference in the world.',
         ageRange: '20-30',
         lookingForGender: 'Female',
         lookingForLocation: 'Any',
         relationshipStatus: 'Single'
    },
    
    'p-6': {
      fullName: 'Nadine Alexis Paguia Lustre',
         image: 'img/nad.jpg',
         age: 31,
         gender: 'Female',
         location: 'Quezon City.',
         education: 'Communication Arts Major(Colegio de San Lorenzo).',
         physicalAppearance: ' long and lean body type, athletic look.',
         personality: 'gentle, sensitive souls who enjoy making things beautiful.',
         hobbies: ' Doing artworks, playing computer games, watching movies.',
         goals: 'To travel the world and experience different cultures.',
         ageRange: '25-35',
         lookingForGender: 'Male',
         lookingForLocation: 'Any',
         relationshipStatus: 'Single'
    },
    
    'p-7': {
      fullName: 'Robert James Reid ',
         image: 'img/jem.jpg',
         age: 31,
         gender: 'Male',
         location: 'Sydney, New South Wales, Australia.',
         education: 'Makati Science High School.',
         physicalAppearance: 'Tall, lean build, black hair and brown eyes.',
         personality: 'Mysterious, reserved, but can be fiercely loyal.',
         hobbies: ' I crochet, read, write, draw, play video games, play D&D, watch anime .',
         goals: 'Become succesful.',
         ageRange: '20-30',
         lookingForGender: 'Female',
         lookingForLocation: 'Any',
         relationshipStatus: 'Single'
    },
    
    'p-8': {
      fullName: 'Rodel Pacheco Nacianceno',
         image: 'img/mar.jpg',
         age: 43,
         gender: 'Male',
         location: 'Santa Cruz, Manila.',
         education: 'degree in hotel and restaurant management(National College of Business and Arts in Fairview).',
         physicalAppearance: 'Short, lean build, dark brown hair and brown eyes.',
         personality: 'hardworking, loyal and dedicated, to people, organisations, groups.',
         hobbies: 'Traveling.',
         goals: 'Become a successful .',
         ageRange: '25-35',
         lookingForGender: 'Female',
         lookingForLocation: 'Manila',
         relationshipStatus: 'Single'
    },
    
    'p-9': {
      fullName: 'Mara Hautea Schnittka',
         image: 'img/jul.jpg',
         age: 29,
         gender: 'Female',
         location: 'Pandacan, Manila, Philippines.',
         education: ' Marketing Management(Southville International School and Colleges).',
         physicalAppearance: 'curvy build, dark blonde hair and brown eyes.',
         personality: 'caring and responsible individual who is deeply committed to her family and friends.',
         hobbies: 'cooking, dancing, Travelling, Reading, Photography and Fitness.',
         goals: 'Become a famous actress.',
         ageRange: '30-40',
         lookingForGender: 'Male',
         lookingForLocation: 'Any.',
         relationshipStatus: 'Single'
    },

    'p-10': {
      fullName: 'Yasmin Isabel Mae Poncardas-Pressman',
         image: 'img/yas.jpg',
         age: 29,
         gender: 'Female',
         location: 'Rizal, Manila, Philippines.',
         education: 'Bachelor of Engineering - BE Mechanical Engineering(University of California).',
         physicalAppearance: 'dark blonde hair(curly) and dark brown eyes.',
         personality: 'Adventurous, Energetic, Assertive.',
         hobbies: 'cooking.',
         goals: 'Makapagpatayo ng sports camp',
         ageRange: '30-40',
         lookingForGender: 'Male',
         lookingForLocation: 'Any.',
         relationshipStatus: 'Single'
    }
  };
  
  return profiles[productId];
}