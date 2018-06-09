import React from 'react';
// import axios from 'axios';

import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Row from 'react-bootstrap/lib/Row';

import BookContainer from './BookContainer/BookContainer';

import Lotr1 from '../../../images/lotr1.jpg';
import Lotr2 from '../../../images/lotr2.jpg';
import Lotr3 from '../../../images/lotr3.jpg';
import DigitalFortress from '../../../images/digitalFortress.jpg';
import Inferno from '../../../images/inferno.jpeg';
import Davinci from '../../../images/davinci.jpeg';

const Catalog = (props) => (
    <div>
        <Jumbotron>
            <h3>Aah the Catalog!</h3>
            <p>
                In this part you can see the different books that have been added to the page. With this you
                can get to know wich book could be better to start reading first, or if the book that you
                wanted to start reading is interesting enough for you.
            </p>
        </Jumbotron>
        <Row>
            <BookContainer title='Lord of the Rings and the Fellowship of the Ring'
                            description='One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the darkeness bind them
                            In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, The Dark Lord, forged the One Ring, filling it with his own power so that he could rule all others. But the One Ring was taken from him, and though he sought it throughout Middle-earth, it remained lost to him. After many ages it fell into the hands of Bilbo Baggins, as told in The Hobbit.
                            In a sleepy village in the Shire, young Frodo Baggins finds himself faced with an immense task, as his elderly cousin Bilbo entrusts the Ring to his care. Frodo must leave his home and make a perilous journey across Middle-earth to the Cracks of Doom, there to destroy the Ring and foil the Dark Lord in his evil purpose.'
                            genre='Fantasy'
                            image={Lotr1}
                            author='J. R. R. Tolkien' />
            <BookContainer title='Lord of the Rings and the Two Towers'
                            description='The Fellowship was scattered. Some were bracing hopelessly for war against the ancient evil of Sauron. Some were contending with the treachery of the wizard Saruman. Only Frodo and Sam were left to take the accursed Ring of Power to be destroyed in Mordor–the dark Kingdom where Sauron was supreme. Their guide was Gollum, deceitful and lust-filled, slave to
                            the corruption of the Ring. Thus continues the magnificent, bestselling tale of adventure begun in The Fellowship of the Ring,which reaches its soul-stirring climax in The Return of the King.'
                            genre='Fantasy'
                            image={Lotr2}
                            author='J. R. R. Tolkien' />
            <BookContainer title='Lord of the Rings and the Return of the King'
                            description="The Companions of the Ring have become involved in separate adventures as the quest continues. Aragorn, revealed as the hidden heir of the ancient Kings of the West, joined with the Riders of Rohan against the forces of Isengard, and took part in the desperate victory of the Hornburg. Merry and Pippin, captured by Orcs, escaped into Fangorn Forest and there
                            encountered the Ents. Gandalf returned, miraculously, and defeated the evil wizard, Saruman. Meanwhile, Sam and Frodo progressed towards Mordor to destroy the Ring, accompanied by SmEagol--Gollum, still obsessed by his 'precious'. After a battle with the giant spider, Shelob, Sam left his master for dead; but Frodo is still alive--in the hands of the Orcs. And all the
                            time the armies of the Dark Lord are massing."
                            genre='Fantasy'
                            image={Lotr3}
                            author='J. R. R. Tolkien' />
        </Row>
        <Row>
            <BookContainer title='Digital Fortress'
                            description='While letting the world believe that certain strong encryption algorithms are too mathematically complicated to break in a reasonable amount of time given current technology, the NSA (National Security Association) has developed a machine which can break anything- until a new unbreakable encryption algorithm is created by an individual with a grudge against
                            the NSA. The NSA find themselves in a position of needing to intercept and destroy the algorithm before it can be released to the world and render their spying efforts useless. Along the way, there are twists and turns and different individuals with different agendas to add some excitement to the story.'
                            genre='Mystery'
                            image={DigitalFortress}
                            author='Dan Brown' />
            <BookContainer title='Inferno'
                            description="Harvard professor of symbology Robert Langdon awakens in an Italian hospital, disoriented and with no recollection of the past thirty-six hours, including the origin of the macabre object hidden in his belongings. With a relentless female assassin trailing them through Florence, he and his resourceful doctor, Sienna Brooks, are forced to flee. Embarking on
                            a harrowing journey, they must unravel a series of codes, which are the work of a brilliant scientist whose obsession with the end of the world is matched only by his passion for one of the most influential masterpieces ever written, Dante Alighieri's The Inferno."
                            genre='Mystery/Conspiracy'
                            image={Inferno}
                            author='Dan Brown' />
            <BookContainer title='Codigo Da Vinci'
                            description="While in Paris, Harvard symbologist Robert Langdon is awakened by a phone call in the dead of the night. The elderly curator of the Louvre has been murdered inside the museum, his body covered in baffling symbols. As Langdon and gifted French cryptologist Sophie Neveu sort through the bizarre riddles, they are stunned to discover a trail of clues hidden in
                            the works of Leonardo da Vinci—clues visible for all to see and yet ingeniously disguised by the painter. Even more startling, the late curator was involved in the Priory of Sion—a secret society whose members included Sir Isaac Newton, Victor Hugo, and Da Vinci—and he guarded a breathtaking historical secret."
                            genre='Mystery/Conspiracy'
                            image={Davinci}
                            author='Dan Brown'/>
        </Row>
    </div>
)

export default Catalog;