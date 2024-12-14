const listItems = [
    {
      href: "https://laaguili-dev.app.genez.io/",
      iconSrc: "/assets/images/favicon.png",
      iconAlt: "avatar",
      text: "Portfolio",
      isImage: true,
      style: "width: 25px; height: 25px;"
    },
    {
      href: "https://github.com/MOHAMED-LAAGUILI",
      icon: "fab fa-github",
      text: "GitHub",
      isImage: false
    },
    {
      href: "https://www.linkedin.com/in/mohamedlaaguili2001/",
      icon: "fab fa-linkedin",
      text: "LinkedIn",
      isImage: false
    },
    {
      href: "https://api.whatsapp.com/send?phone=212689770809",
      icon: "fab fa-whatsapp",
      text: "WhatsApp",
      isImage: false
    },
    {
      href: "tel:+212689770809",
      icon: "fas fa-phone-alt",
      text: "Call me",
      isImage: false
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
      anchor.classList.add('btn', 'btn-primary', 'call-button', 'w-100', 'mb-2', 'animate__fadeInRight');
      
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
  