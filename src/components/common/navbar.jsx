import React from "react";
import { FloatingNav } from "../ui/floating-navbar";

function NavBar() {
  return (
    <div>
      <FloatingNav
        navItems={[
          {
            name: "Home",
            link: "home",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                className=""
              >
                <path
                  fill="currentColor"
                  d="M7.308 19q-.671 0-1.143-.472q-.473-.472-.473-1.144V9.947L3 11.952q-.177.115-.365.097q-.189-.018-.323-.195q-.135-.177-.114-.365q.021-.189.198-.324l8.629-6.451q.217-.162.463-.233T12 4.409t.513.072t.462.232l3.371 2.51v-1.28q0-.395.274-.669T17.288 5t.669.274t.274.668v2.696l3.392 2.528q.171.134.195.323t-.11.365t-.323.195t-.366-.097l-2.692-2.006v7.439q0 .67-.472 1.143q-.472.472-1.143.472h-1.866q-.671 0-1.143-.472t-.472-1.144v-3q0-.269-.173-.442t-.442-.173h-1.231q-.27 0-.443.173t-.173.442v3q0 .672-.472 1.144T9.154 19zm0-1h1.846q.269 0 .442-.173t.173-.442v-3q0-.671.472-1.144q.473-.472 1.144-.472h1.23q.672 0 1.144.472q.472.473.472 1.144v3q0 .269.173.442t.442.173h1.866q.269 0 .442-.173t.173-.442V9.21l-4.962-3.685Q12.213 5.41 12 5.41t-.365.115L6.692 9.21v8.175q0 .269.174.442q.173.173.442.173m2.884-7.994h3.616q0-.704-.542-1.159q-.543-.455-1.266-.455t-1.265.455t-.543 1.159M9.154 18q.269 0 .442-.173t.173-.442v-3q0-.671.472-1.144q.473-.472 1.144-.472h1.23q.672 0 1.144.472q.472.473.472 1.144v3q0 .269.173.442t.442.173q-.269 0-.442-.173t-.173-.442v-3q0-.671-.472-1.144t-1.143-.472h-1.231q-.671 0-1.144.472q-.472.473-.472 1.144v3q0 .269-.173.442T9.154 18"
                />
              </svg>
            ),
          },
          {
            name: "Projects",
            link: "projects",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="28"
                viewBox="0 0 48 48"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.631 13.688v7.222m-.001-4.243a1.81 1.81 0 0 0 1.806 1.806h0a1.81 1.81 0 0 0 1.806-1.806v-1.173a1.81 1.81 0 0 0-1.806-1.806h0a1.81 1.81 0 0 0-1.805 1.806M35.59 17.57c-.27.542-.902.903-1.534.903h0a1.81 1.81 0 0 1-1.806-1.805v-1.174a1.81 1.81 0 0 1 1.806-1.806h0c.632 0 1.264.361 1.534.903m-5.833 2.979c-.271.542-.903.903-1.535.903h0a1.81 1.81 0 0 1-1.805-1.805v-1.174a1.81 1.81 0 0 1 1.805-1.806h0a1.81 1.81 0 0 1 1.806 1.806v.632h-3.612"
                />
                <path
                  fill="currentColor"
                  d="M24.931 11.522a.75.75 0 0 1-1.5 0a.75.75 0 0 1 1.5 0"
                />
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M24.181 13.688v5.417a1.81 1.81 0 0 1-1.805 1.805h0c-.452 0-.903-.18-1.264-.541m16.361-6.681h1.896m-.903-1.534v6.319m-23.78-4.785v4.785m0-2.979a1.81 1.81 0 0 1 1.805-1.806h0m3.712 4.785a1.81 1.81 0 0 1-1.806-1.805v-1.174a1.81 1.81 0 0 1 1.806-1.806h0a1.81 1.81 0 0 1 1.805 1.806v1.174a1.81 1.81 0 0 1-1.805 1.805m-2.459 18.755V24.717L24 37.228l6.256-12.511v12.511"
                />
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"
                />
              </svg>
            ),
          },

          {
            name: "About",
            link: "about",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M6.196 17.485q1.275-.918 2.706-1.451Q10.332 15.5 12 15.5t3.098.534t2.706 1.45q.99-1.025 1.593-2.42Q20 13.667 20 12q0-3.325-2.337-5.663T12 4T6.337 6.338T4 12q0 1.667.603 3.064q.603 1.396 1.593 2.42m5.805-4.984q-1.264 0-2.133-.868T9 9.501t.868-2.133T12 6.5t2.132.868T15 9.5t-.868 2.132t-2.131.868M12 21q-1.883 0-3.525-.701t-2.858-1.916t-1.916-2.858T3 12t.701-3.525t1.916-2.858q1.216-1.215 2.858-1.916T12 3t3.525.701t2.858 1.916t1.916 2.858T21 12t-.701 3.525t-1.916 2.858q-1.216 1.215-2.858 1.916T12 21m0-1q1.383 0 2.721-.484q1.338-.483 2.313-1.324q-.974-.783-2.255-1.237T12 16.5t-2.789.445t-2.246 1.247q.975.84 2.314 1.324T12 20m0-8.5q.842 0 1.421-.579T14 9.5t-.579-1.421T12 7.5t-1.421.579T10 9.5t.579 1.421T12 11.5m0 6.75"
                />
              </svg>
            ),
          },
          {
            name: "Tech",
            link: "tech",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M2 7V5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v2h-2V5H4v2zm6 14v-2H4q-.825 0-1.412-.587T2 17v-2h2v2h16v-2h2v2q0 .825-.587 1.413T20 19h-4v2zM4.8 11l2.6-2.6L6 7l-4 4l4 4l1.4-1.4zm14.4 0l-2.6 2.6L18 15l4-4l-4-4l-1.4 1.4z"
                />
              </svg>
            ),
          },
          {
            name: "Service",
            link: "service",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M9 4L7 6L5 8l2 2l2 2l.7-.7l.7-.7l-1.3-1.3L7.8 8l1.3-1.3l1.3-1.3l-.7-.7zm6 0l-.7.7l-.7.7l1.3 1.3L16.2 8l-1.3 1.3l-1.3 1.3l.7.7l.7.7l2-2l2-2l-2-2zm5.977 15.09l-.388-1.532a.75.75 0 0 0-.356-.466a.76.76 0 0 0-.587-.072l-4.552 1.284L12 17l3.915-1.003a1.9 1.9 0 0 0 .558-.893L16.166 14L8 15H3v6h5l4.455.964a3.2 3.2 0 0 0 .727-.017l7.26-1.954a.76.76 0 0 0 .454-.344a.74.74 0 0 0 .081-.56M6 20H4v-4h2zm6.922.982a.6.6 0 0 1-.138.018a.5.5 0 0 1-.115-.012L8 19.963V16.02l7.329-.908L10 17l4.721 2.232l.317.127l.328-.093l4.316-1.217l.264 1.042Z"
                />
              </svg>
            ),
          },
          {
            name: "Contact",
            link: "contact",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M2.616 19.616q-.691 0-1.153-.463T1 18V6q0-.69.463-1.153t1.152-.463h18.77q.69 0 1.153.463T23 6v12q0 .69-.462 1.153t-1.153.463zm12.169-1h6.6q.23 0 .423-.193Q22 18.231 22 18V6q0-.23-.192-.423q-.193-.192-.424-.192H2.616q-.231 0-.424.192T2 6v12q0 .23.192.423t.423.193h.6q1.05-1.356 2.554-2.178T9 15.616t3.23.822t2.555 2.178M9 14.23q1.039 0 1.77-.731t.73-1.77t-.73-1.768T9 9.23t-1.77.73t-.73 1.77t.73 1.769t1.77.73m9.308 3.193l1.615-1.615l-1.23-1.654h-1.728q-.188-.565-.269-1.078T16.616 12t.08-1.051t.27-1.103h1.726l1.231-1.654l-1.615-1.615q-1.216.992-1.897 2.413q-.68 1.42-.68 3.01t.68 3.01t1.897 2.413M4.55 18.616h8.9q-.87-.95-2.022-1.475q-1.153-.525-2.428-.525t-2.425.525t-2.025 1.475M9 13.23q-.617 0-1.059-.441q-.441-.442-.441-1.06t.441-1.058T9 10.231t1.059.441t.441 1.059t-.441 1.059q-.442.44-1.059.44M12 12"
                />
              </svg>
            ),
          },
        ]}
      />
    </div>
  );
}

export default NavBar;
