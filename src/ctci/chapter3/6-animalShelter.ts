/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
/**
 * Animal Shelter:
 *
 * An animal shelter, which holds only dogs and cats, operates on a strictly"first in, first
 * out" basis. People must adopt either the "oldest" (based on arrival time) of all animals at the shelter,
 * or they can select whether they would prefer a dog or a cat (and will receive the oldest animal of
 * that type). They cannot select which specific animal they would like. Create the data structures to
 * maintain this system and implement operations such as enqueue, dequeueAny, dequeueDog,
 * and dequeueCat. You may use the built-in Linked list data structure
 */

class Animal {
  type: "dog" | "cat";
  name: string;
  next: Animal | null;
  id: number;

  constructor(
    type: "dog" | "cat",
    name: string,
    id: number,
    next: null | Animal = null,
  ) {
    this.type = type;
    this.name = name;
    this.next = next;
    this.id = id;
  }
}

class AnimalShelter {
  catQueueHead: Animal | null = null;
  catQueueTail: Animal | null = null;
  dogQueueHead: Animal | null = null;
  dogQueueTail: Animal | null = null;
  private id: number;

  constructor() {
    this.catQueueHead = null;
    this.catQueueTail = null;
    this.dogQueueHead = null;
    this.dogQueueTail = null;
    this.id = 0;
  }

  /**
   * Time: O(1)
   */
  enqueue(type: "cat" | "dog", name: string) {
    const animalNode = new Animal(type, name, this.id);

    if (type === "dog") {
      if (!this.dogQueueHead) {
        this.dogQueueHead = animalNode;
        this.dogQueueTail = animalNode;
      } else {
        this.dogQueueTail!.next = animalNode;
        this.dogQueueTail = this.dogQueueTail!.next;
      }
    }

    if (type === "cat") {
      if (!this.catQueueHead) {
        this.catQueueHead = animalNode;
        this.catQueueTail = animalNode;
      } else {
        this.catQueueTail!.next = animalNode;
        this.catQueueTail = this.catQueueTail!.next;
      }
    }
    this.id++;
  }

  /**
   * Time: O(1)
   */
  dequeueAny() {
    const catHead = this.catQueueHead;
    const dogHead = this.dogQueueHead;

    if (!catHead && !dogHead) {
      throw new Error("There aren't any animals!");
    }

    if (!catHead || this.catQueueHead!.id > this.dogQueueHead!.id) {
      this.dogQueueHead = this.dogQueueHead?.next;
      if (!this.dogQueueHead) {
        this.dogQueueTail = null;
      }
      return;
    }

    if (!dogHead || this.dogQueueHead!.id > this.catQueueHead!.id) {
      this.catQueueHead = this.catQueueHead?.next;
      if (!this.catQueueHead) {
        this.catQueueTail = null;
      }
      return;
    }
  }

  /**
   * Time: O(1)
   */
  dequeueDog() {
    if (!this.dogQueueHead) {
      throw new Error("There are no dogs in this shelter");
    }

    this.dogQueueHead = this.dogQueueHead.next;

    if (!this.dogQueueHead) {
      this.dogQueueTail = null;
    }
  }

  /**
   * Time: O(1)
   */
  dequeueCat() {
    if (!this.catQueueHead) {
      throw new Error("There are no cats in this shelter");
    }

    this.catQueueHead = this.catQueueHead.next;

    if (!this.catQueueHead) {
      this.catQueueTail = null;
    }
  }
}

const animalShelter = new AnimalShelter();
animalShelter.enqueue("dog", "fido");
animalShelter.enqueue("dog", "rover");
animalShelter.enqueue("dog", "buster");
animalShelter.enqueue("dog", "kona");
animalShelter.enqueue("cat", "tabby");
animalShelter.enqueue("cat", "boots");
// console.log("head", animalShelter.dogQueueHead);
// console.log("tail", animalShelter.dogQueueTail);
animalShelter.dequeueAny();
animalShelter.dequeueCat();
console.log(animalShelter.catQueueHead);
