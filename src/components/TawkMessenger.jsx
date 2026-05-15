import React, { useEffect } from 'react';

const TawkMessenger = () => {
  useEffect(() => {
    // Start of Tawk.to Script
    var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
    (function(){
      var s1 = document.createElement("script"),
          s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = 'https://embed.tawk.to/69c2c4ccbf6f2a1c3ac88ad1/1jkgd1g4t';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin','*');
      s0.parentNode.insertBefore(s1, s0);
    })();
    // End of Tawk.to Script

    return () => {
      // Optional: Cleanup script if necessary when component unmounts
      // Tawk.to usually stays global, but you could hide it here
    };
  }, []);

  return null; // This component doesn't render anything itself
};

export default TawkMessenger;
