"use strict";document.addEventListener("DOMContentLoaded",function(){function t(){var t=window.location.href.substr(0,window.location.href.indexOf("#"));history.replaceState({},document.title,t)}function e(){o.classList.remove("is-clipped"),c.forEach(function(e){e.classList.remove("is-active"),t()})}function n(t){return Array.prototype.slice.call(document.querySelectorAll(t),0)}var o=document.documentElement,c=n(".modal"),d=n(".modal-button"),a=n(".modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button");d.length>0&&d.forEach(function(t){t.addEventListener("click",function(){var e=t.dataset.target,n=document.getElementById(e);o.classList.add("is-clipped"),n.classList.add("is-active")})}),a.length>0&&a.forEach(function(t){t.addEventListener("click",function(){e()})}),document.addEventListener("keydown",function(t){27===(t||window.event).keyCode&&e()})});