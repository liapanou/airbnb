import { useState } from "react";
const list = [
  { src: "/D850-20220603-12_57_03@70 mm.jpg" },
  { src: "/D850-20220603-14_19_09@70 mm.jpg" },
  { src: "/D850-20220603-15_32_07@70 mm.jpg" },
  { src: "/D850-20220603-16_40_07@70 mm.jpg" },
  { src: "/D850-20220603-17_34_05@70 mm.jpg" },
  { src: "/D850-20220603-12_58_48@70 mm.jpg" },
  { src: "/D850-20220603-14_19_55@70 mm.jpg" },
  { src: "/D850-20220603-15_33_03@70 mm.jpg" },
  { src: "/D850-20220603-16_41_25@70 mm.jpg" },
  { src: "/D850-20220603-17_34_49@70 mm.jpg" },
  { src: "/D850-20220603-12_59_27@70 mm.jpg" },
  { src: "/D850-20220603-14_21_51@70 mm.jpg" },
  { src: "/D850-20220603-15_33_31@70 mm.jpg" },
  { src: "/D850-20220603-16_42_28@70 mm.jpg" },
  { src: "/D850-20220603-17_37_03@70 mm.jpg" },
  { src: "/D850-20220603-13_12_10@70 mm.jpg" },
  { src: "/D850-20220603-14_37_29@70 mm.jpg" },
  { src: "/D850-20220603-15_39_13@70 mm.jpg" },
  { src: "/D850-20220603-16_50_02@70 mm.jpg" },
  { src: "/D850-20220603-17_50_30@70 mm.jpg" },
  { src: "/D850-20220603-13_14_29@70 mm.jpg" },
  { src: "/D850-20220603-14_38_29@70 mm.jpg" },
  { src: "/D850-20220603-15_39_28@70 mm.jpg" },
  { src: "/D850-20220603-16_50_33@70 mm.jpg" },
  { src: "/D850-20220603-17_50_58@70 mm.jpg" },
  { src: "/D850-20220603-13_14_59@70 mm.jpg" },
  { src: "/D850-20220603-14_39_51@70 mm.jpg" },
  { src: "/D850-20220603-15_39_45@70 mm.jpg" },
  { src: "/D850-20220603-16_51_36@70 mm.jpg" },
  { src: "/D850-20220603-17_51_26@70 mm.jpg" },
  { src: "/D850-20220603-13_34_22@70 mm.jpg" },
  { src: "/D850-20220603-14_46_25@70 mm.jpg" },
  { src: "/D850-20220603-15_42_10@70 mm.jpg" },
  { src: "/D850-20220603-17_08_02@70 mm.jpg" },
  { src: "/D850-20220603-18_04_15@70 mm.jpg" },
  { src: "/D850-20220603-13_35_18@70 mm.jpg" },
  { src: "/D850-20220603-14_47_57@70 mm.jpg" },
  { src: "/D850-20220603-15_42_26@70 mm.jpg" },
  { src: "/D850-20220603-17_08_33@70 mm.jpg" },
  { src: "/D850-20220603-18_05_55@70 mm.jpg" },
  { src: "/D850-20220603-13_37_01@70 mm.jpg" },
  { src: "/D850-20220603-14_48_22@70 mm.jpg" },
  { src: "/D850-20220603-15_42_52@70 mm.jpg" },
  { src: "/D850-20220603-17_09_23@70 mm.jpg" },
  { src: "/D850-20220603-18_06_38@70 mm.jpg" },
  { src: "/D850-20220603-13_52_45@70 mm.jpg" },
  { src: "/D850-20220603-14_55_20@70 mm.jpg" },
  { src: "/D850-20220603-15_55_46@70 mm.jpg" },
  { src: "/D850-20220603-17_15_49@70 mm.jpg" },
  { src: "/D850-20220603-18_19_00@70 mm.jpg" },
  { src: "/D850-20220603-13_53_12@70 mm.jpg" },
  { src: "/D850-20220603-14_57_45@70 mm.jpg" },
  { src: "/D850-20220603-16_10_56@70 mm.jpg" },
  { src: "/D850-20220603-17_16_07@70 mm.jpg" },
  { src: "/D850-20220603-18_20_12@70 mm.jpg" },
  { src: "/D850-20220603-13_53_58@70 mm.jpg" },
  { src: "/D850-20220603-14_58_50@70 mm.jpg" },
  { src: "/D850-20220603-16_11_45@70 mm.jpg" },
  { src: "/D850-20220603-17_16_33@70 mm.jpg" },
  { src: "/D850-20220603-18_20_57@70 mm.jpg" },
  { src: "/D850-20220603-14_08_27@70 mm.jpg" },
  { src: "/D850-20220603-15_20_27@70 mm.jpg" },
  { src: "/D850-20220603-16_26_37@70 mm.jpg" },
  { src: "/D850-20220603-17_23_16@70 mm.jpg" },
  { src: "/D850-20220603-14_10_01@70 mm.jpg" },
  { src: "/D850-20220603-15_21_16@70 mm.jpg" },
  { src: "/D850-20220603-16_27_11@70 mm.jpg" },
  { src: "/D850-20220603-17_23_47@70 mm.jpg" },
  { src: "/D850-20220603-14_11_16@70 mm.jpg" },
  { src: "/D850-20220603-15_21_57@70 mm.jpg" },
  { src: "/D850-20220603-16_27_36@70 mm.jpg" },
  { src: "/D850-20220603-17_24_50@70 mm.jpg" },
];

function Page() {
  const [photo, setPhoto] = useState("/D850-20220603-12_57_03@70 mm.jpg");
  const [type, setType] = useState("");
  return (
    <div className="bg-slate-800 h-screen  w-screen">
      <div className="grid p-10  grid-cols-[1fr_2fr]  gap-4 ">
        <div className="w-full h-full text-white  rounded-l-2xl bg-black">
          <img
            className="w-full h-[90vh] object-scale-down   rounded-l-2xl"
            src={photo}
            alt=""
          />
        </div>

        {/* filters */}
        <div className="  w-full bg-slate-700  rounded-r-2xl p-4">
          <div className="tabs font-extrabold">
            <a
              onClick={() => setType("blouza")}
              className={`tab tab-lifted ${
                type === "blouza" ? "tab-active" : ""
              } `}
            >
              Μπλούζα
            </a>
            <a
              onClick={() => setType("panteloni")}
              className={`tab tab-lifted ${
                type === "panteloni" ? "tab-active" : ""
              } `}
            >
              Παντελόνι
            </a>
            <a
              onClick={() => setType("forema")}
              className={`tab tab-lifted ${
                type === "forema" ? "tab-active" : ""
              } `}
            >
              Φόρεμα
            </a>
            <a
              onClick={() => setType("fousta")}
              className={`tab tab-lifted ${
                type === "fousta" ? "tab-active" : ""
              } `}
            >
              Φούστα
            </a>
          </div>

          <div className="grid gap-2 h-[87vh]  overflow-y-auto grid-cols-6">
            {list.map((a) => (
              <div
                key={a.src}
                onClick={() => setPhoto(a.src)}
                className="bg-slate-600 border hover:border-amber-400 cursor-pointer h-full w-full"
              >
                <img className="w-full h-40 " src={a.src} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
