module.exports = (fullName) => {
  if (typeof fullName !== 'string') {
    return 'Error';
  } 

  const splittedFullname = fullName.split(' ');
  const [ firstName, lastName ] = splittedFullname;

  return (!firstName || !lastName || splittedFullname.length > 2) 
    ? 'Error'
    : firstName[0].toUpperCase() + firstName.slice(1).toLowerCase() + ' ' + lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();
};
