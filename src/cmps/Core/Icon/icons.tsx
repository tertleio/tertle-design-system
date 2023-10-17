type IconProps = React.HTMLAttributes<SVGElement>;

const Icons = {
  spinner: (props: IconProps) => (
    <svg
      className="animate-spin"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <circle
        className="opacity-10"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="4"
      ></circle>
    </svg>
  ),
  tertle: (props: IconProps) => (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M5 3l14 9-9 7-7-5z"></path>
    </svg>
  ),
  heart: (props: IconProps) => (
    <svg
      role="img"
      fill="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
    </svg>
  ),
  heartSolid: (props: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" {...props}>
      <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
    </svg>
  ),
  link: (props: IconProps) => (
    <svg
      role="img"
      fill="bibe"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-6 h-6"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
      />
    </svg>
  ),
  cancel: (props: IconProps) => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="currentColor"
      {...props}
    >
      <g clipPath="url(#clip0_2910_28386)">
        <path
          d="M8 16C12.4112 16 16 12.4112 16 8C16 3.5888 12.4112 0 8 0C3.5888 0 0 3.5888 0 8C0 12.4112 3.5888 16 8 16ZM13.2174 8C13.2174 10.8769 10.8769 13.2174 8 13.2174C7.06588 13.2174 6.18915 12.9695 5.42991 12.5377L12.5377 5.42991C12.9695 6.18915 13.2174 7.06588 13.2174 8ZM8 2.78261C8.93412 2.78261 9.81085 3.03054 10.5701 3.46233L3.46233 10.5701C3.03054 9.81085 2.78261 8.93412 2.78261 8C2.78261 5.12313 5.12313 2.78261 8 2.78261Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_2910_28386">
          <rect width="16" height="16" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  ),
  save: (props: IconProps) => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="currentColor"
      {...props}
    >
      <g clipPath="url(#clip0_2910_28361)">
        <path
          d="M15.6415 3.55364L12.6121 0.524211C12.3825 0.294676 12.0712 0.165749 11.7466 0.165749H11.2415V4.69417C11.2415 4.99735 10.9957 5.24312 10.6925 5.24312H3.38687C3.08369 5.24312 2.83791 4.99735 2.83791 4.69417V0.165695H1.22391C0.54798 0.165695 0 0.713676 0 1.38966V14.6104C0 15.2863 0.54798 15.8343 1.22391 15.8343H14.7761C15.452 15.8343 16 15.2863 16 14.6104V4.4191C16 4.09453 15.8711 3.78318 15.6415 3.55364Z"
          fill="currentColor"
        />
        <path
          d="M8.88443 4.16016H9.82298C10.0124 4.16016 10.1659 4.00659 10.1659 3.81724V1.2903C10.1659 1.10089 10.0124 0.94738 9.82298 0.94738H8.88443C8.69502 0.94738 8.54151 1.10089 8.54151 1.2903V3.81724C8.54151 4.00659 8.69507 4.16016 8.88443 4.16016Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_2910_28361">
          <rect width="16" height="16" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  ),
  edit: (props: IconProps) => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="currentColor"
      {...props}
    >
      <g clipPath="url(#clip0_2910_28380)">
        <path
          d="M14.2222 4.30937L13.2097 5.32187L10.6785 2.7875L11.691 1.775C11.8972 1.56875 12.2566 1.56875 12.4628 1.775L14.2222 3.5375C14.4347 3.75 14.4347 4.09687 14.2222 4.30937ZM5.76284 12.7781L3.23159 10.2437L9.77534 3.69062L12.3066 6.225L5.76284 12.7781ZM2.64722 11.4656L4.54097 13.3625L1.90347 14.1062L2.64722 11.4656ZM15.1253 2.63437L13.366 0.871872C13.0222 0.528122 11.7816 -0.121878 10.791 0.871872L1.87534 9.79375C1.79722 9.87187 1.74097 9.96562 1.71284 10.0719L0.369094 14.8562C0.306594 15.0781 0.372219 15.3156 0.531594 15.4812C0.694094 15.6469 1.01909 15.675 1.15659 15.6437L5.93784 14.2969C6.04409 14.2687 6.13784 14.2125 6.21597 14.1344L15.1253 5.2125C15.8347 4.50312 15.8347 3.34687 15.1253 2.63437Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_2910_28380">
          <rect width="16" height="16" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  ),
  upload: (props: IconProps) => (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="currentColor"
      {...props}
    >
      <path
        d="M7.81825 1.18188C7.64251 1.00615 7.35759 1.00615 7.18185 1.18188L4.18185 4.18188C4.00611 4.35762 4.00611 4.64254 4.18185 4.81828C4.35759 4.99401 4.64251 4.99401 4.81825 4.81828L7.05005 2.58648V9.49996C7.05005 9.74849 7.25152 9.94996 7.50005 9.94996C7.74858 9.94996 7.95005 9.74849 7.95005 9.49996V2.58648L10.1819 4.81828C10.3576 4.99401 10.6425 4.99401 10.8182 4.81828C10.994 4.64254 10.994 4.35762 10.8182 4.18188L7.81825 1.18188ZM2.5 9.99997C2.77614 9.99997 3 10.2238 3 10.5V12C3 12.5538 3.44565 13 3.99635 13H11.0012C11.5529 13 12 12.5528 12 12V10.5C12 10.2238 12.2239 9.99997 12.5 9.99997C12.7761 9.99997 13 10.2238 13 10.5V12C13 13.104 12.1062 14 11.0012 14H3.99635C2.89019 14 2 13.103 2 12V10.5C2 10.2238 2.22386 9.99997 2.5 9.99997Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      ></path>
    </svg>
  ),
  twitter: (props: IconProps) => (
    // TODO: THIS IS NEW X LOGO, CHANGE NAME
    <svg
      width="396"
      height="396"
      viewBox="0 0 396 396"
      fill="currentColor"
      {...props}
    >
      <path
        d="M301.026 37.125H355.608L236.362 173.415L376.645 358.875H266.805L180.774 246.395L82.335 358.875H27.72L155.265 213.098L20.691 37.125H133.32L211.084 139.937L301.026 37.125ZM281.869 326.205H312.114L116.886 68.079H84.4305L281.869 326.205Z"
        fill="currentColor"
      />
    </svg>
  ),
  linkedin: (props: IconProps) => (
    <svg width="14" height="16" viewBox="0 0 16 16" {...props}>
      <svg width="14" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path
          d="M15.996 16L16 15.9993V10.1313C16 7.26064 15.382 5.04931 12.0262 5.04931C10.413 5.04931 9.33037 5.93464 8.8884 6.77398H8.84173V5.31731H5.65992V15.9993H8.97306V10.71C8.97306 9.31735 9.23704 7.97064 10.9616 7.97064C12.6608 7.97064 12.6862 9.55998 12.6862 10.7993V16H15.996Z"
          fill="currentColor"
        />
        <path
          d="M0.264487 5.31799H3.58163V16H0.264487V5.31799Z"
          fill="currentColor"
        />
        <path
          d="M1.92122 0C0.86062 0 0 0.860668 0 1.92133C0 2.98199 0.86062 3.86066 1.92122 3.86066C2.98182 3.86066 3.84244 2.98199 3.84244 1.92133C3.84177 0.860668 2.98115 0 1.92122 0Z"
          fill="currentColor"
        />
      </svg>
    </svg>
  ),
  // personal: (props: IconProps) => (
  //   <svg
  //     fill="none"
  //     viewBox="0 0 24 24"
  //     strokeWidth="1.5"
  //     stroke="currentColor"
  //     className="w-6 h-6"
  //     {...props}
  //   >
  //     <path
  //       strokeLinecap="round"
  //       strokeLinejoin="round"
  //       d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
  //     />
  //   </svg>
  // ),
  // TODO: rename this to personalSolid (above is personalOutline)
  personal: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
        clipRule="evenodd"
      />
      <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
    </svg>
  ),
  bell: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
      />
    </svg>
  ),
  bellSolid: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
      />
    </svg>
  ),
};

{
  /* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM20.57 16.476c-.223.082-.448.161-.674.238L7.319 4.137A6.75 6.75 0 0118.75 9v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206z" />
  <path fill-rule="evenodd" d="M5.25 9c0-.184.007-.366.022-.546l10.384 10.384a3.751 3.751 0 01-7.396-1.119 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z" clip-rule="evenodd" />
</svg> */
}

export { Icons };