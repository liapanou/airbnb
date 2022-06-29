import { useState } from "react";
import spitia from "../utils/houses";

// filters
function Filters() {
  const [open, setOpen] = useState(true);
  return (
    <div className="ml-auto relative h-20">
      <button
        onClick={() => setOpen(!open)}
        className="border rounded-2xl  flex items-center px-6 py-4 font-semibold"
      >
        <img
          className="mr-4"
          src="https://s2.svgbox.net/octicons.svg?ic=filter"
          alt=""
        />
        Φίλτρα
      </button>
      <div
        className={
          open
            ? "border top-16 right-0  rounded-lg absolute bg-white text-black shadow w-40  text-center  "
            : "hidden"
        }
      >
        <ul>
          <li>
            <a
              className=" block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 "
              href="#"
            >
              Προσφορές
            </a>
          </li>
          <li>
            <a
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
              href="#"
            >
              Αγαπημένα μέρη
            </a>
          </li>
          <li>
            <a
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 "
              href="#"
            >
              Γίνε οικοδεσπότης
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Image(props: { src: string; type: string }) {
  return (
    <div className="mr-4 flex w-20 flex-col items-center">
      <img className=" h-6 w-6" src={props.src} alt="" />
      <p className="text-xs mt-2 text-center text-gray-500">{props.type}</p>
    </div>
  );
}

const icons = [
  {
    type: "Νησιά",
    src: "https://cdn-icons.flaticon.com/png/128/475/premium/475535.png?token=exp=1655194017~hmac=7c9b1bcbb9743db75184b960e13a1d46",
  },
  {
    type: "Παραλία",
    src: "https://cdn-icons.flaticon.com/png/128/561/premium/561829.png?token=exp=1655193921~hmac=6490fcb58b75f8f48ed91c2966fc6d8c",
  },
  {
    type: "Κυκλαδίτικα σπίτια",
    src: "https://s2.svgbox.net/materialui.svg?ic=house&color=555",
  },
  {
    type: "Εντυπωσιακές επιλογές",
    src: "https://s2.svgbox.net/materialui.svg?ic=house&color=555",
  },
  {
    type: "Εθνικά πάρκα",
    src: "https://cdn-icons-png.flaticon.com/512/2204/2204056.png",
  },
  {
    type: "Απίθανες πισίνες",
    src: "https://cdn-icons-png.flaticon.com/128/1925/1925928.png",
  },
  {
    type: "Χώροι με design",
    src: "https://cdn-icons.flaticon.com/png/512/2484/premium/2484112.png?token=exp=1655194373~hmac=4b7abbe7513ccf9141db87134dfef64a",
  },
  {
    type: "Αρκτική",
    src: "https://cdn-icons-png.flaticon.com/128/65/65182.png",
  },
  {
    type: "Μικροσκοπικά σπίτια",
    src: "https://cdn-icons-png.flaticon.com/128/509/509892.png",
  },
  {
    type: "Πολύ κοντά σε λίμνη",
    src: "https://cdn-icons.flaticon.com/png/128/3746/premium/3746152.png?token=exp=1655194619~hmac=d26ed764c2802c67301f6ed71a27ff69",
  },
];

function Card(props: any) {
  return (
    <div className="w-full h-72 border shadow  rounded-2xl">
      <img className="rounded-t-2xl h-40" src={props.image} alt="" />
      <div className="p-4 ">
        <h1 className="text-2xl font-bold">{props.title}</h1>
        <p className="text-gray-600 mt-4 text-sm">{props.location}</p>
        <h1 className="text-sm text-black">{props.price}Euro</h1>
      </div>
    </div>
  );
}

function Home() {
  const [open, setOpen] = useState(true);
  const [value, setValue] = useState("");
  console.log(value);
  const spitia1 = spitia.filter((a) => a.name === value);
  return (
    <div>
      <header className="grid h-20 gap-4 border grid-cols-3">
        <img
          className="w-32 h-full"
          src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
          alt=""
        />
        <div className=" relative flex items-center justify-center h-20 w-full">
          <input
            onChange={(evt) => setValue(evt.currentTarget.value)}
            className=" px-4 py-2 border w-full rounded-3xl"
            placeholder="search"
          />
          <button className="absolute right-4">🔍</button>
        </div>
        <div className=" flex justify-end items-center p-4  h-20 w-full ">
          <div className="relative right-0">
            <img
              onClick={() => setOpen(!open)}
              className="rounded-full  w-10 h-10 "
              src="https://a0.muscache.com/im/pictures/user/9b14a601-a1e4-4259-abc6-f625978a7e70.jpg?aki_policy=profile_medium"
              alt=""
            />
            {/* Dropdown menu */}
            <div
              className={
                open
                  ? "border top-12 right-0 bg-white text-black  rounded-lg h-40 w-40 text-center  absolute shadow-lg font-medium z-10  dark:bg-gray-700"
                  : "hidden"
              }
            >
              <div>
                <ul>
                  <li>
                    <a
                      className=" block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 "
                      href="#"
                    >
                      Μηνύματα
                    </a>
                  </li>
                  <li>
                    <a
                      className=" block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600  "
                      href="#"
                    >
                      Ταξίδια
                    </a>
                  </li>
                  <li>
                    <a
                      className=" block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600  "
                      href="#"
                    >
                      Αγαπημένα
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* FILTERS */}
      <div className="flex items-center ">
        <div className="p-4 borders flex ">
          {icons.map((y, idx) => (
            <Image key={idx} src={y.src} type={y.type} />
          ))}
        </div>
        <Filters />
      </div>

      {/* CARDS */}
      <div className=" grid grid-cols-5 gap-4 p-4">
        {spitia1.map((obj, idx) => (
          <Card
            key={idx}
            title={obj.name}
            image={obj.image}
            location={obj.location}
            price={obj.price}
          />
        ))}
      </div>
      <footer className="fixed bottom-0 left-0 shadow px-8 bg-white w-full border-top grid grid-cols-2 gap-4 h-20 items-center">
        <div>
          © 2022 Airbnb, Inc.·Απόρρητο·Όροι·Χάρτης ιστότοπου·Στοιχεία εταιρείας
        </div>
        <div className="ml-auto  flex  ">
          <div className="hover:underline mr-3   ">Ελληνικά (GR)</div>
          <div className="hover:underline mr-3 ">€ EUR</div>
          <div className="hover:underline mr-3 ">Υποστήριξη και πηγές </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
