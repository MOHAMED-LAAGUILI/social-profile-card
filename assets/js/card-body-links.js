const listItems = [
    {
      href: "https://laaguili-dev.app.genez.io",
      iconSrc: "https://res.cloudinary.com/djmafhmnw/image/upload/f_auto,q_auto/v1/Portfolio/192x192",
      iconAlt: "Portfolio",
      text: "Portfolio",
      isImage: true,
      style: "width: 30px; height: 30px;"
    },
    {
      href: "https://www.linkedin.com/in/mohamedlaaguili2001/",
      iconSrc: "https://tse2.mm.bing.net/th?id=OIP.QAxeJ33Fyfd28DXfzIQ95QHaHa&pid=Api&P=0&h=180",
      iconAlt: "LinkedIn",
      text: "LinkedIn",
      isImage: true,
      style: "width: 30px; height: 30px;"
    },
    {
      href: "https://www.facebook.com/profile.php?id=100014521591779",
      iconSrc: "https://tse2.mm.bing.net/th?id=OIP.cOz92GK9w_2_VxUIWBL0ngHaHa&pid=Api&P=0&h=180",
      iconAlt: "Facebook",
      text: "Facebook",
      isImage: true,
      style: "width: 30px; height: 30px;"
    },
    {
      href: "https://www.github.com/MOHAMED-LAAGUILI",
      iconSrc: "https://logos-download.com/wp-content/uploads/2016/09/GitHub_logo.png",
      iconAlt: "Github",
      text: "Github",
      isImage: true,
      style: "width: 30px; height: 30px; background-color:white;"
    },
  
    
  ];
  
  // Function to generate the list items dynamically
  function generateListItems() {
    const listContainer = document.getElementById('dynamic-list');
  
    listItems.forEach(item => {
      const listItem = document.createElement('li');
      
      // Create the anchor tag for the list item
      const anchor = document.createElement('a');
      anchor.href = item.href;
      anchor.classList.add( 'button', 'w-100', 'mb-2', 'animate__fadeInRight');
      
      // If the list item contains an image
      if (item.isImage) {
        const img = document.createElement('img');
        img.src = item.iconSrc;
        img.alt = item.iconAlt;
        img.classList.add('shadow', 'img-fluid', 'rounded-circle', 'animate__fadeIn', 'image-effect');
        img.style = item.style;
        anchor.appendChild(img);
        anchor.appendChild(document.createTextNode(item.text));
      } else {
        // If the list item contains an icon
        const icon = document.createElement('i');
        icon.classList.add(...item.icon.split(' ')); // split the class names
        anchor.appendChild(icon);
        anchor.appendChild(document.createTextNode(item.text));
      }
      
      listItem.appendChild(anchor);
      
      // If the item has sublinks (like the Download CV section)
      if (item.subLinks) {
        const subList = document.createElement('ul');
        subList.classList.add('navbar-nav', 'me-auto');
        item.subLinks.forEach(subItem => {
          const subListItem = document.createElement('li');
          const subAnchor = document.createElement('a');
          subAnchor.classList.add('nav-link', 'animate__fadeInRight');
          subAnchor.href = subItem.href;
          subAnchor.target = '_blank';
          const subIcon = document.createElement('i');
          subIcon.classList.add(...subItem.icon.split(' '));
          subAnchor.appendChild(subIcon);
          subAnchor.appendChild(document.createTextNode(subItem.text));
          subListItem.appendChild(subAnchor);
          subList.appendChild(subListItem);
        });
        listItem.appendChild(subList);
      }
      
      listContainer.appendChild(listItem);
    });
  }
  
  // Call the function to generate the list
  generateListItems();
  