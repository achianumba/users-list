let users = [
  {
    name: 'Lelah Nichols',
    city: 'Troy',
    state: 'MI',
    tags: ['clothes', 'stem'],
  },
  {
    name: 'Jesus Weiss',
    city: 'Forth Worth',
    state: 'TX',
    tags: ['headset', 'gadget', 'speed', 'winter'],
  },
  {
    name: 'Annie Rice',
    city: 'Austin',
    state: 'TX',
    tags: ['road', 'mountain', 'trip', 'earth', 'nature'],
  },

  {
    name: 'Robert Brower',
    city: 'Cincinnati',
    state: 'OH',
    tags: ['maintenance', 'gears', 'frames', 'repair'],
  },
  {
    name: 'Amy Campbell',
    city: 'Warrior',
    state: 'AL',
    tags: ['music', 'disks'],
  },
  {
    name: 'Anthony S. Morin',
    city: 'Lyndhurst',
    state: 'NJ',
    tags: ['vintage', 'electric'],
  },
];

// calls replace method twice incase there's a middle name/initial
for (let i in users) {
  users[i].avatar = `/images/${users[i].name
    .replace(' ', '-')
    .replace(' ', '-')
    .toLowerCase()}.png`;
}

export default users;
