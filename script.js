function name(nm)
{
  currentName = document.getElementById('name')
	newname = nm
  currentName.textContent = newname;
}

const form = document.getElementById('nameInput')

form.addEventListener('submit', function(event)
{
  event.preventDefault();
  differentName = document.getElementById('newName')
  console.log(differentName)
  name(differentName);
});
