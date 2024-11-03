<!-- src/components/GhostIcon.vue -->
<template>
    <div class="ghost-container">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="ghost-icon">
        <path fill="currentColor" d="M16 3c-4.4 0-8 3.6-8 8v16c0 1.1.9 2 2 2 .7 0 1.3-.3 1.7-.8.4.5 1 .8 1.7.8s1.3-.3 1.7-.8c.4.5 1 .8 1.7.8s1.3-.3 1.7-.8c.4.5 1 .8 1.7.8s1.3-.3 1.7-.8c.4.5 1 .8 1.7.8 1.1 0 2-.9 2-2V11c0-4.4-3.6-8-8-8zm0 2c3.3 0 6 2.7 6 6v16c0 0-.9 0-2-.8-1.1.8-2 .8-2 .8s-.9 0-2-.8c-1.1.8-2 .8-2 .8s-.9 0-2-.8c-1.1.8-2 .8-2 .8V11c0-3.3 2.7-6 6-6z"/>
        <circle fill="currentColor" cx="12" cy="12" r="2"/>
        <circle fill="currentColor" cx="20" cy="12" r="2"/>
      </svg>
    </div>
  </template>
  
  <style scoped>
  .ghost-container {
    position: relative;
    width: 40px;
    height: 40px;
    cursor: pointer;
  }
  
  .ghost-icon {
    color: #33C3F0;
    transition: all 0.3s ease;
    width: 100%;
    height: 100%;
    animation: float 3s ease-in-out infinite;
  }
  
  /* お化けのホバーアニメーション */
  .ghost-container:hover .ghost-icon {
    transform: translateY(-3px) rotate(5deg);
    color: #1EAEDB;
  }
  
  /* お化けのフローティングアニメーション */
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-5px); }
    100% { transform: translateY(0px); }
  }
  
  @media (max-width: 768px) {
    .ghost-container {
      width: 32px;
      height: 32px;
    }
  }
  </style>