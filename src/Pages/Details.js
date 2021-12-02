import React from 'react';
import Header from '../Component/Header';
import Footer from '../Component/Footer';
let id = localStorage.getItem("itemId");

const Details = () => {

    return (
        <div>
            <Header />
            <section className="details_section">
                <div className="container-fluid h-100">
                    <div className="row">
                        <div className="col-lg-5 text-center">
                            <img src={
                                id == 1
                                ? "https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/1.png"
                                : id == 2
                                ? "https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/2.png"
                                : id == 3
                                ? "https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/3.png"
                                : id == 4
                                ? "https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/4.png"
                                : id == 5
                                ? "https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/5.png"
                                : id == 6
                                ? "https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/6.png"
                                : id == 7
                                ? "https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/7.png"
                                : "https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/8.png"
                            }
                                className="img-fluid" alt="img" 
                            />
                        </div>
                        <div className="col-lg-7 text-left right-side-details">
                            {id == 1?
                            <h1>Lady Shistrike</h1> :
                            id == 2?
                            <h1>Lady Katakana</h1> :
                            id == 3?
                            <h1>Princess Sukimi</h1>:
                            id ==4?
                            <h1>Queen Pixlia</h1>:
                            id ==5?
                            <h1>Lady Aloysia</h1>:
                            id ==6?
                            <h1>Lady Fuyu</h1>:
                            id ==7?
                            <h1>Lady Akia Manto</h1>:
                            <h1>Prince Ao</h1>
                             }   
                            {/* <h4>Lady Shistrike the dominion of death</h4> */}
                            
                            {
                                id == 1?
                                <p>
                                Lady Shistrike was born in the slums of her large village. Her mother died during childbirth and her father passed soon after. She was living on the streets as a young child. A local gang took her and many other orphaned kids in. She spent her days scamming villagers, stealing from merchants, or doing physical labor to pay her keep. If she made a profit that day she ate. If not, she was punished. She rebelled at first. But, soon learned to keep her head down and do what she was told. She became incredibly good at bringing large profits back to the base. Once she was a young teenager, they had her work on more important missions such as assassinations. She became so skilled that she was tasked with mentoring the children. She became particularly close with one young boy, Akihito. He became a younger brother to her. On days he couldn’t make enough money to eat, Lady Shistrike would steal him an extra portion of food. Akihito admired Lady Shistrike’s incredible stealth and fighting abilities. <br /> <br />

                                Lady Shistrike was out on a mission one night. She returned to find many of the children bruised and beaten. Akihito had been beaten half to death. Apparently they hadn’t gotten any dinner that evening. Akihito led the children on a mission to steal food from the hold. They were caught and punished. Lady Shistrike tracked down the gang members to a local tavern. With no hesitation she killed everyone inside the tavern. She usually made clean work of her targets but her emotions got the better of her. The village guard entered to find her standing above the bodies. She was charged and was to be hung. But, Lady Akia Manto swooped in and took out the guards. She saw great potential in Lady Shistrike and offered Shistrike safety in exchange for her loyalty. Lady Shistrike saw this as a way to survive another day, and agreed. She now works to repay Lady Akia Manto for saving her. 
                                </p>:
                                id == 2?
                                <p>
                                    The dark elves were forced underground after a great civil war many centuries ago. A lot of pressure is put on dark elf children to become strong soldiers and reclaim their land. Lady Katakana grew up in a large and noble dark elf family. Her parents put immense pressure on all of their children to succeed. She had to work twice as hard to stand out. Lady Katakana would stay up late studying and she would sneak above ground to train. Lady Akia Manto had discovered her training one night. Akia Manto challenged Lady Katakana to spar. Lady Akia Manto was strong but Lady Katakana better understood how to make use of her terrain. It was a draw. The two of them bickered about who truly won. They soon became regular sparring partners, and eventually good friends. After a while Lady Akia Manto stopped showing up for training, and the two didn’t talk for many years. <br /> <br />
                                    Lady Katakana spent time as a soldier, as all dark elves must serve time in their army. As a soldier, her intellect and skill as a strategist did not go unnoticed. One of her superiors promoted her to an advisor in the Dark Elves’ war council. She was young, with little experience, so her wisdom was often overlooked. She was frequently spoken over. After many years of no contact, Lady Akia Manto returned. It was noticeable how much she had grown, not just from age, but from the increased training and experiments. Lady Akia Manto asked Lady Katakana to join her as her own personal advisor. Lady Katakana was frustrated with her own council and excited to reunite with her friend. So she agreed on the condition that the interests of the Dark Elves always be taken into consideration. Now she works as Lady Akia Manto’s personal advisor. She works to make Lady Akia Manto’s dreams a reality and to improve the lives of her people. 
                                </p>:
                                id==3?
                                <p>
                                    Sukimi and her twin sister Akane were both born to the King and Queen of the Golden Palace. The two were inseparable. However, at the age of five, Akane was kidnapped. The King attempted to rescue Akane but died during the rescue mission. After these tragic events the Queen grew overprotective of Sukimi. Sukimi was never allowed outside the castle walls. But even inside the castle walls her movements and actions were constantly recorded. Any misstep was reported to the Queen and resulted in severe punishment. Princess Sukimi spent dawn to dusk training in defensive magic. The Queen even had surprise trials for Sukimi. She would appoint guards to act as intruders and attempt to kidnap Princess Sukimi in her sleep. If Princess Sukimi failed to escape from the “invaders” she would be shut inside her room for a week. Due to these “tests” Sukimi developed severe insomnia. But she did not spend her groundings being bored. She would sneak into the library and steal books to read late into the night. She also bribed guards to bring her toys and other fun trinkets. When the Queen realized that the knights were going easy on Sukimi, the Queen appointed High Elf Lady Aloysia as her new teacher. Lady Aloysia was tough on Sukimi in training, but a good friend to her outside of the training grounds. <br /> <br />
                                    When Sukimi was thirteen her mother grew ill. To insure Princess Sukimi would be protected, she arranged a marriage between her and Prince Ao. Princess Sukimi was instantly wooed by Prince Ao’s kindness and charisma. During the last years of her life the Queen allowed Prince Ao to escort her daughter outside the castle walls. When the Queen passed, Princess Sukimi and Prince Ao took the throne. Prince Ao has taken over most of the political affairs, but Princess Sukimi does her own work as the princess each day. She enjoys this time of peace in her kingdom. While she is saddened to see what her sister has become, she will not let Lady Akia Manto hurt her prince or her people. 
                                </p>:
                                id==4?
                                <p>
                                    The forest of pixies selects a new queen at the death of the previous one. Pixlia was selected as queen at her birth, signified by the powerful rainbow light surrounding her. Her entire life she was trained by the forest itself. She has been the reigning queen for well over a century now. As queen she has traveled for diplomatic purposes. But, most pixies remain isolated from the rest of the island. Protected by a magical barrier, their village is impenetrable to unwanted outsiders. Throughout generations, the pixies have remained neutral in most wars and political affairs on the island. Queen Pixlia sees the pixies as her children, and does not want them to die in the name of foolish wars. However, in recent years the natural world has begun to deteriorate. Queen Pixlia is now willing to take more drastic measures.  Her goal is protect her forest no matter what the cost. 

                                </p>:
                                id==5?
                                <p>Lady Aloysia grew up as a high elf noble. Her life consisted of an excellent education, demanding training, and luxury. She was a fierce general on the battleground. After the most recent war with the Dark Elves ended, most warriors were relieved of their duties. She became a member of the Elven Council and a Professor of War Arts. Though, the age of peace has quite frankly bored her. She spent most of her days in council meetings to discuss the same politic issues daily. Even her skills as a professor were rarely sought after in a time without war. She honestly missed her adventurous days on the battlefield. When the Meta Human Queen asked her to train her daughter, she gladly accepted. She thought the opportunity to train Princess Sukimi would be an exciting change of pace. But, she is once again stuck inside another castle. At least Princess Sukimi will excitedly listen to all of her tales of adventure. However, between the rising agitation of the Elven council members and the whispers in the castle, Lady Aloysia knows something big is coming. And she cannot wait. </p>:
                                id==6?
                                <p>Lady Fuyu and her younger brother grew up as part of the Snow Bird Village within the mountains of Isekai Island. The people of this village have a magical bond with nature. Each villager is either an elemental, a druid, or have another strong connection with the mountain. Fuyu’s mother was once the head of the village. Her mother was a strong advocate for the natural world and stood up against any environmental injustice. They aligned themselves with the Meta Humans in many battles, as they agreed to work together to protect the natural magic of the island. But, after the most recent war against the dark elves their village lost many of their best warriors, including Fuyu’s mother. And, their allies, the Kingdom, gave their village no aid. Lady Fuyu had to take on the role of village head at an early age. After the war, the village made the decision to isolate themselves from the rest of the island. Now they focus on rebuilding their village and strengthening their bonds to the natural world. 
                                    <br/><br/>
                                    Lady Fuyu uses a lot of tough love on her villagers. But, she is also kind and patient with the village children and elders. She even likes to crack jokes with her fellow Snow Bird warriors. However, she keeps her guard up around outsiders. Her trust is hard to gain but very easy to break. She feels the most free when she transforms into animals and can fully embrace the natural world.  Each day she strives to better connect herself to the mountain itself. Her goal is to become wise enough and strong enough to protect her mountain and her people. 
                                </p>:
                                    id==7?
                                <p>Akane and Sukimi were born to the King and Queen of the Golden Palace. Akane enjoyed leading Sukimi on adventures around the castle. They were both incredibly happy children and always attached at the hip. However she was always more courageous than Sukimi. When they were five she wanted to sneak out of the castle but Sukimi was too scared to follow. Akane decided to go on her own. However, while she was alone the BBEG kidnapped her. She was never rescued. The BBEG took her in as his own daughter. But life as his daughter was not easy. He put her through rigorous training and torturous experiments. Through his rituals she grew horns, a tail and even gained his dark magical abilities. She tried to escape multiple times. However, the rituals performed on her created a magical tie between her and the BBEG. With this tie, if she tries to escape he can torture her or even kill her. Once she realized her family was never coming back for her she renamed herself Akia Manto.
                                <br/><br/>
                                Once she was a teenager he began to assign her dangerous missions. She had no choice but to execute the missions and return. However, on her missions she slowly started building her own connections and power. She hired Lady Shistrike and Lady Katakana, and aligned with orcs and other creatures on the island. One day she and her allies launched an attack on the BBEG while he was weakened. They were able to severely wound him and destroy his physical form. But, they could not break his soul’s connection to the island. His magic continues to keep a tight hold on Lady Akia Manto. She is now forced to help the BBEG complete his ritual to return to the mortal world. But, she continues to secretly strengthen herself so she may one day defeat him for good and finally be free. 
                                </p>:
                                <p>Ao was born to a family of nobles. While he received training for knighthood, he excelled in his academic studies. Prince Ao preferred playing a game of chess to partaking in a sparring match. But, he performed both well nonetheless. His skills only enhanced the already prestigious name of his household. When he became a teenager his parents arranged his engagement to Princess Sukimi. He spent most of his summers with her at the castle. He would take her on trips outside of the castle. Sukimi would guide him through the secret passageways of the castle. They treated each day together as another adventure. Everyone in the castle always gossiped about just how in love the two of them were. At the news of his parents’ deaths, Prince Ao moved into the castle. His grief propelled him even further into his royal studies. When the Queen passed away, he and Princess Sukimi officially took to the throne. <br /><br /> Prince Ao is a very charismatic prince, and is able to charm almost everyone he meets. He also is wise beyond his years and executes his duties as a Prince with efficiency. Even though he is very talented he shows humility when he speaks. While the Kingdom is experiencing a time of peace, he knows there is still much work to be done to improve the lives of his subjects. Prince Ao continues to work tirelessly for the prosperity of his people. </p>
                                    
                            }                        
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Details