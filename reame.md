1. I used the submit web event to update the display name
2. I put it at the end of my body section. I put it there because if it wasn't there 
it didn't recognize the form that was created earlier in the body. I tried putting it
in the head but the eventlistener that javascript was trying to run would say it was null.
Therefore I believe that was the best place.
3. It is best practice to store CSS and JS externally because it is seperation of concerns.
This is good because if you need to make changes to JS or CSS that are applied to different areas
on the webpage everything will be changed by modifying the seperate files rather than having to go
and change every individual CSS and JS line you have in your HTML code.