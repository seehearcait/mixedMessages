const firstNames = ['Shannel', 'Nina', 'Rebecca', 'Ongina', 'Victoria', 'Akashia', 'Tammie', 'Jade', 'BeBe', 'Nicole', 'Shangela', 'Raven', 'Jujubee', 'Sahara', 'Morgan', 'Mystique', 'Jessica', 'Sonique', 'Tatianna', 'Pandora', 'Tyra', 'Delta', 'Carmen', 'Phoenix', 'Manila', 'Stacy', 'Venus', 'Yara', 'Mariah', 'Alexis', 'India', 'Mimi', 'Raja', 'Shangela', 'Willam', 'Lashauwn', 'Jiggly', 'Phi', 'Madame', 'Milan', 'Alisa', 'DiDa', 'The', 'Kenya', 'Chad', 'Sharon', 'Latrice', 'Detox', 'Roxxxy', 'Jade', 'Serena', 'Alyssa', 'Jinkx', 'Penny', 'Vivienne', 'Alaska', 'Honey', 'Ivy', 'Monica', 'Lineysha', 'Coco', 'Adore', 'BenDeLaCreme', 'Gia', 'Laganja', 'April', 'Kelly', 'Vivacious', 'Bianca', 'Trinity', 'Joslyn', 'Milk', 'Magnolia', 'Courtney', 'Darienne', 'Miss', 'Ginger', 'Jaidynn', 'Violet', 'Max', 'Katya', 'Jasmine', 'Mrs.', 'Trixie', 'Kandy', 'Pearl', 'Kennedy', 'Sasha', 'Tempest', 'Naomi', 'Cynthia', 'Dax', 'Naysha', 'Acid', 'Robbie', 'Kim', 'Thorgy', 'Bob', 'Laila', 'Chi', 'Derrick', 'Peppermint', 'Valentina', 'Eureka', 'Charlie', 'Farrah', 'Sasha', 'Alexis', 'Shea', 'Trinity', 'Kimora', 'Jaymes', 'Nina', 'Aja', 'Cynthia', 'Eureka', 'Asia', 'Miz', 'Yuhua', 'Blair', 'Monét', 'Kameron', 'Mayhem', 'Kalorie', 'Monique', 'Dusty', 'The', 'Vanessa', 'Aquaria', 'Vanessa', 'Nina', 'Shuga', 'Plastique', 'Mercedes', 'Scarlet', 'Honey', "A'keria", 'Yvie', 'Silky', 'Brooke', 'Ariel', "Ra'jah", 'Kahanna', 'Soju'];

const lastNames = ['Act', 'Andrews', 'Barry', 'Belle', 'Betty', 'Beverly Hillz', 'Beyond', 'Blac', "Bo'nina Brown", 'Boxx', 'Brown', 'Cain', 'Caliente', 'Carrera', 'Carrión', 'ChaCha', 'Chachki', 'Chanel Davenport', 'Chi', 'Chi DeVayne', 'Couleé', 'Cracker', 'Crawford', 'D-Lite', "O'Hara", 'Davenport', 'Davenport', 'Davenport', 'Del Rio', 'Delano', 'Diore Fierce', 'DuJour', 'Edwards', 'Envy', 'Estranja', 'ExclamationPoint', 'Fame', 'Ferrah', 'Flowers', 'Fox', 'Glasscock', 'Gunn', 'Hamasaki', 'Heart', 'Hides', 'Ho', 'Iman Diamond', 'Imfurst', 'Jolie', 'K. Bonet', 'Karbdashian Williams', 'Kasha Davis', 'Lake', 'LaQueer', 'Laquifa Wadley', 'Last Name', 'Layne Matthews', 'Lee Fontaine', 'Lee Fontaine', 'Lopez', 'Luzon', 'Lynn Hytes', 'Mahogany', 'Mansfield', 'Mantle', 'Masters', 'Mateo', 'Mattel', 'McMichaels', 'McQueen', 'Michaels', 'Michaels', 'Michaels', 'Michelle', 'Miller', 'Minj', 'Moan', 'Monsoon', 'Montrese', 'Montrese', 'Needles', 'Nutmeg Ganache', "Oddly", 'Paige Brooks', 'Pinay', 'Porkchop Parker', 'Princess', 'Ray Bottoms', 'Ritz', 'Royale', 'Sanchez', 'Smalls', 'Sofia', 'Sparx', 'St. Clair', 'Summers', 'Summers Madison', 'Taylor', 'the Drag Queen', 'Thor', 'Tiara', 'Tration', 'Turner', 'Vanjie Mateo', 'Vanjie Mateo', 'Velour', 'Versace', 'Vixen', 'West', 'Wild', 'Winters', 'Work', 'X Change', 'Zahara Benet'];

const getRandom = (array) => {
    const length = array.length;
    const index =  Math.floor(Math.random()*length)
    return array[index];
}

const getFirstName = () => {
    return getRandom(firstNames);
}

const getLastName = () => {
    return getRandom(lastNames);
}

exports.modules = {getFirstName, getLastName};