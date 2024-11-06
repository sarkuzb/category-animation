import { useState } from "react";

function Category() {
  const [open, setOpen] = useState(false);
  const [reversed, setReversed] = useState(false);

  const toggleOpen = () => {
    if (open) {
      setReversed(true);
      setTimeout(() => {
        setOpen(false);
        setReversed(false);
      }, 400);
    } else {
      setOpen(true);
    }
  };

  return (
    <>
      {/* {open && (
        <div>
          <p className={`ClassName ${reversed ? "reversed" : ""}`}>Hello</p>
        </div>
      )}
      <button onClick={toggleOpen}>Click Me</button> */}
      <div className="bg-slate-200 h-screen ">
        <div className="ml-2 pt-2">
          <button
            onClick={toggleOpen}
            className="border-2 bg-slate-100 border-slate-500 text-gray-800 p-1 px-3 rounded-md font-semibold hover:bg-slate-200 active:bg-slate-300 transition transform"
          >
            Category
          </button>
        </div>
        {open && (
          <div className={`ClassName ${reversed ? "reversed" : ""}`}>
            <div className="bg-slate-100 border-2 border-slate-500 rounded-md m-2 p-2 w-40">
              <p className="text-lg font-semibold pb-1">Category</p>
              <div className="flex justify-between">
                <div>
                  <ul className="text-gray-800 ">
                    <li className="cursor-pointer hover:bg-slate-200 rounded p-1">
                      Elem 1
                    </li>
                    <li className="cursor-pointer hover:bg-slate-200 rounded p-1">
                      Elem 2
                    </li>
                    <li className="cursor-pointer hover:bg-slate-200 rounded p-1">
                      Elem 3
                    </li>
                    <li className="cursor-pointer hover:bg-slate-200 rounded p-1">
                      Elem 4
                    </li>
                    <li className="cursor-pointer hover:bg-slate-200 rounded p-1">
                      Elem 5
                    </li>
                    <li className="cursor-pointer hover:bg-slate-200 rounded p-1">
                      Elem 6
                    </li>
                    <li className="cursor-pointer hover:bg-slate-200 rounded p-1">
                      Elem 7
                    </li>
                    <li className="cursor-pointer hover:bg-slate-200 rounded p-1">
                      Elem 8
                    </li>
                    <li className="cursor-pointer hover:bg-slate-200 rounded p-1">
                      Elem 9
                    </li>
                    <li className="cursor-pointer hover:bg-slate-200 rounded p-1">
                      Elem 10
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="text-gray-800 ">
                    <li className="cursor-pointer hover:bg-slate-200 rounded p-1">
                      Elem 1
                    </li>
                    <li className="cursor-pointer hover:bg-slate-200 rounded p-1">
                      Elem 2
                    </li>
                    <li className="cursor-pointer hover:bg-slate-200 rounded p-1">
                      Elem 3
                    </li>
                    <li className="cursor-pointer hover:bg-slate-200 rounded p-1">
                      Elem 4
                    </li>
                    <li className="cursor-pointer hover:bg-slate-200 rounded p-1">
                      Elem 5
                    </li>
                    <li className="cursor-pointer hover:bg-slate-200 rounded p-1">
                      Elem 6
                    </li>
                    <li className="cursor-pointer hover:bg-slate-200 rounded p-1">
                      Elem 7
                    </li>
                    <li className="cursor-pointer hover:bg-slate-200 rounded p-1">
                      Elem 8
                    </li>
                    <li className="cursor-pointer hover:bg-slate-200 rounded p-1">
                      Elem 9
                    </li>
                    <li className="cursor-pointer hover:bg-slate-200 rounded p-1">
                      Elem 10
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Category;
