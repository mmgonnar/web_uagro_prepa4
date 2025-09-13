// 'use client';

// import { TimeLineItemProps } from '../types/types';

// interface TimeLineProps {
//   items: TimeLineItemProps[];
// }
// export default function TimeLine({ items }: TimeLineProps) {
//   return (
//     <div className="max-w-8xl py-12">
//       <div className="bg-secondary-grey">-----</div>
//       <div className="grid grid-cols-1 md:grid-cols-5 md:gap-x-12">
//         {items.map((item, index) => (
//           <div key={index} className="flex flex-col items-center">
//             <div className="text-center">
//               <p className="pb-2 text-sm text-gray-500">{item.date}</p>
//               <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
//               <p className="text-xs text-gray-600">{item.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

'use client';

import { TimelineItemType } from '../types/types';

interface TimeLineProps {
  items: TimelineItemType[];
}
export default function TimeLine({ items }: TimeLineProps) {
  return (
    <section className="flex min-h-screen justify-center bg-gray-100 pt-20">
      <div className="w-80">
        <h2 className="mb-7 text-xl text-gray-700">Recent Updates</h2>
        <ul>
          {items.map((item, index) => (
            <li className="relative flex items-baseline gap-6 pb-5">
              <div className="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  className="bi bi-circle-fill fill-gray-400"
                  viewBox="0 0 16 16"
                >
                  <circle cx="8" cy="8" r="8" />
                </svg>
              </div>

              <div key={index} className="flex flex-col items-center">
                <div className="text-center">
                  <p className="pb-2 text-sm text-gray-500">{item.time}</p>
                  <p className="pb-2 text-sm text-gray-500">{item.title}</p>

                  <p className="text-xs text-gray-600">{item.description}</p>
                </div>
              </div>
              {index < items.length - 1 && (
                <div className="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-400"></div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
