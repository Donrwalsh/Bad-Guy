# Bad Guy

MEAN Stack video game influenced by Cookie Clicker, Elvenar, Clash of Clans and a lifetime of gaming. 

This repository is provided as a demonstration of how the front-end is built. Cloning and running it locally will not work so well, as the accompanying mongoDB data is not contained in this repository. Please use the [Demo](https://glacial-stream-89607.herokuapp.com/) if you want to play. 

About 75% of the features described below are actually implemented, with the absence of heroes and anything beyond the most simple instance of a feature being notable.

## Gameplay

You begin the game at rock bottom. No money, no henchmen and the only Lair you could find is Mom's Basement. When all you have is time, the best thing to do is make use of it. You must hatch schemes that will let you build an empire to be feared.

##### Schemes

Schemes are passive abilities that take time to unlock and once active will unlock or improve core game mechanics. Early schemes are quickly unlocked through scheming alone, but more advanced schemes require certain Lair levels or resources to even begin working towards. All scheme progress is lost when you are defeated by a hero.

##### Recruitment

Evil overlords prefer to not get their hands dirty, so you will need a legion of henchmen to carry out your bidding. Finding henchmen is easy, just post a help wanted ad or start a clone factory. The operations you have planned are dangerous as they are numerous, so keeping a steady supply of expendable henchmen is crucial. All henchmen and recruitment efforts are lost when you are defeated by a hero.

##### Training

Sometimes there are tasks that require a wider set of skills that the average henchmen does not possess. Not to worry! Your expert leadership skills can be honed to enable the training of normal, dumb henchmen into special, intelligent advanced henchmen. Train advanced henchmen for any occasion, like the Shadow henchman who carries out operations without attracting unwanted attention, or the Guard henchman who stands sentry and increases your Lairs defensive capabilities when a hero invades. All advanced henchmen and training efforts are lost when you are defeated by a hero.

##### Operations

Operations are the last critical aspect of your plans for world domination. It's important to know your limits, so you'll start small by performing heists and shady business deals to generate income, but you'll build to sabotaging democracy and manipulating markets to destabilize the world to make it ripe for the harvest. Early heists are forgettable and will attract no unwanted attention, but soon enough more advanced and lucrative operations come at the cost of notoriety. Notoriety attracts heroes.

##### Heroes

As your empire grows and your influence spreads, you will attract the attention of pathetic do-gooders. These pitiful idealists will challenge your destiny, and will attempt to thwart your carefully laid plans by invading your Lair. Should they make it past the guards, the traps and the defensive capabilities of your Lair itself, the hero will attempt to destroy you.

Invading heroes start weak, but will become more powerful and threatening as your notoriety grows. Defeated heroes will have gear and valuables that can be absorbed into your operation. Occasionally a defeated hero will have in their possession a strange object of great magical power. Recognizing this, you stash them away for safekeeping. **Strange objects are retained when you are defeated by a hero**.

If you are defeated by a hero, you lost all progress you have made except for your strange object inventory and specialization benefits. You must start the game again from the beginning.

##### Specialization

Strange objects are used to unlock unique schemes that provide powerful benefits that cannot be undone by attacking heroes. Only with specialization can you become powerful enough to laugh in the face of even the most threatening heroes.

The **Necromancer** specialization improves your ability of generating henchmen through. . . questionable methods.

The **Mad Scientist** specialization improves your ability to use currency and resources in unpredictable ways.

The **Pirate** specialization improves your ability to gather and generate resources through both existing and new methods.

The **Time Lord** specilization enables you to bend the fabric of reality to your benefit.

The **EA Games Executive** specialization improves your ability to generate currency through devious and malevolent game development practices.

##### Gems

Gems are the premium currency of Bad Guy. They are so extremely, ridiculously and impossibly rare, that you should not be surprised if you never see one.

Gems cannot be purchased, and provide no benefit.

## Dev Notes

Bad Guy is an exercise in building an idle clicker game with a MEAN stack. This is primarily a solo coding venture, though friends and family provided input regarding game balance as well as many clever flavor contributions.

MongoDB is used as a stand-alone provider of details that are displayed to the user. This is an unusual delegation, but the reasoning is simple: Reduce the Angular app to specifically the logic and arrangement of rendered information since the two concepts share a different conceptual mind-space anyway. This game is single-player and need not rely on the database for anything at all, so this is a helpful way to incorporate the technology into the project rather than bypass it altogether.

Express is largely unused, but has been tweaked slightly from the default implementation.

Node is configured for the initial API call described above, but is otherwise unused thus far.

Angular 4 is the meat and potatoes of this project. The game is contained within a single page that utilizes several different components:

###### scheme-panel.component.ts

Displays all schemes as nodes organized by tree and tier. Selecting a node opens a flyout that describes the scheme and if the scheme is available offers a button to start scheming. Unlearnable schemes have their node greyed out but still provide information.

###### activity-panel.component.ts

Recruitment and Training objects are displayed visually and may be interacted with. The Operations menu showing available operations and active countdowns are in a separate column. Various objects and operation trees appear as they are unlocked.

###### header.component.ts

While not technically part of the header, the row for player resources appears immediately beneath  it. The Header proper displays the notoriety gauge, a visual display of the scheme being learned and the title.

##### Angular Logic

These visual components are supported by a suite of services that handle all the logic of the game. The core of the game is delivered through the `primary-loop.service.ts` which ticks every 1/10th of a second and decides if an event should occur. 

For example, every second the player naturally hatches 1 scheme point. The loop will then consult `scheming.service.ts` every second and ask for the number of scheme points hatched. `scheming.service.ts` will decide, with assistance from the class `base-num.ts`, how many scheme points are hatched. This number is then used by `scheming-service.ts` (at the request of `primary-loop.service.ts`) to increment accrued exp towards the current scheme, while attending to the potential of a scheme being learned on that tick. 

This is one example in a network of interactions between the baseline services that concern themselves with an area of gameplay (`scheming.service.ts` exists alongside `recruiting.service.ts` and `operating-service.ts` for example). These baseline services never reference one another, but they all extend a core class called `base-num.ts` that provides structural variables and scheme modification logic. 

Extending a base class replaces the original implementation of the core `player.service.ts` and `numbers.service.ts`. Complications arose when I needed to import structural data into models, necessitating this switch. It's overall a lot cleaner and makes tasks that were rather complicated pretty mundane which is always nice.

##### Current Status:

Loosely referencing this build as 'Version -4' since Phase 0 is complete. Next steps are:

- Heroes are ready to be added.
- The Maintenance Scheme does nothing.
- Lair Stats are loosely implemented and do not do anything.
- No user-facing save/load handlers. Just the autosave every minute and manually deleting a cookie.

I'm going to be putting some effort towards working on this project in a more public way now that there is at least something to show.