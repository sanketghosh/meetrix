import { cn } from "@/lib/utils";

type LogoipsumProps = React.ComponentPropsWithRef<"svg">;

export default function Logoipsum({ className }: LogoipsumProps) {
  return (
    <svg
      /*  width="235"
      height="41" */
      viewBox="0 0 235 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <path
        d="M90.4124 12.7432C90.4124 20.3627 90.4124 23.3706 80.3044 23.3706C90.4124 23.3706 90.4124 26.3784 90.4124 33.998C90.4124 26.4237 90.4124 23.3706 100.362 23.3706C90.4124 23.3706 90.4124 20.3175 90.4124 12.7432Z"
        fill="#283841"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M40.5756 40.3684C37.0798 40.3684 34.0065 39.6693 31.3556 38.271C28.7337 36.8436 26.68 34.8627 25.1944 32.3283C24.9551 31.9071 24.7354 31.4745 24.5354 31.0305L23.3615 39.7566H0.0712891V39.3198H0.115026C1.1637 39.3198 2.00851 39.0429 2.64937 38.4895C3.29023 37.936 3.61066 37.135 3.61066 36.0862V10.917C3.61066 9.86841 3.29023 9.02351 2.64937 8.38265C2.00851 7.74179 1.1637 7.42136 0.115026 7.42136H0.0712891V6.98436H14.0105V7.42136H13.8357C12.7869 7.42136 11.9421 7.74179 11.3013 8.38265C10.6604 9.02351 10.34 9.86841 10.34 10.917V36.261C10.34 37.1932 10.5585 37.9215 10.9954 38.4458C11.4615 38.941 12.2626 39.1886 13.3987 39.1886H14.3163C16.909 39.1886 19.0938 38.3876 20.8708 36.7853C22.604 35.2226 23.7136 33.0365 24.1997 30.2269C23.4062 28.1715 23.0096 25.886 23.0096 23.3706C23.0096 19.9622 23.7378 16.9909 25.1944 14.4564C26.68 11.8929 28.7337 9.91196 31.3556 8.51367C34.0065 7.08629 37.0798 6.37259 40.5756 6.37259C43.9871 6.37259 46.9823 7.05237 49.5615 8.41174C52.3126 7.05237 55.5076 6.37259 59.1466 6.37259C60.2827 6.37259 61.2148 6.41633 61.9431 6.50362C62.7005 6.562 63.3706 6.63483 63.9531 6.72212C64.5358 6.80959 65.1767 6.89688 65.8758 6.98436C66.6041 7.04255 67.5072 7.07165 68.585 7.07165L69.8959 15.8111H69.4589C68.9345 13.0436 67.7548 10.8733 65.9196 9.3002C64.1134 7.72715 61.8557 6.94062 59.1466 6.94062C57.4861 6.94062 55.9713 7.33388 54.6021 8.12041C53.7002 8.63858 52.8867 9.28945 52.1618 10.0732C51.8244 10.4377 51.5062 10.8312 51.2072 11.2534C51.1735 11.301 51.1399 11.349 51.1067 11.3975C50.8256 11.8147 50.562 12.2569 50.3158 12.7241C49.9918 13.3388 49.6979 13.9975 49.4344 14.6984C49.3253 14.9877 49.2215 15.2846 49.1229 15.5889C49.0212 15.9027 48.9249 16.2244 48.8342 16.5539C48.3098 18.5639 48.0477 20.7925 48.0477 23.2394C48.0477 25.495 48.2531 27.5692 48.6641 29.4623L47.9696 31.5248C47.6062 32.6041 47.1712 33.5484 46.6714 34.3664C46.3638 34.8518 46.0381 35.2876 45.6957 35.6766L45.663 35.7139C44.5814 34.7287 43.6575 33.6002 42.8915 32.3283C41.3475 29.7647 40.5756 26.7496 40.5756 23.2831C40.5756 19.9039 41.3475 16.9472 42.8915 14.4128C43.9456 12.6822 45.2851 11.2167 46.9097 10.0159C46.253 9.25368 45.5254 8.6219 44.7267 8.12041C43.4741 7.33388 42.0903 6.94062 40.5756 6.94062C39.0607 6.94062 37.677 7.33388 36.4243 8.12041C35.1717 8.90694 34.1085 10.0139 33.2345 11.4415C32.3315 12.8689 31.6323 14.602 31.1371 16.6412C30.671 18.6512 30.4379 20.8798 30.4379 23.3268C30.4379 25.7739 30.671 28.0023 31.1371 30.0123C31.6323 32.0224 32.3315 33.7411 33.2345 35.1685C34.1085 36.5961 35.1717 37.703 36.4243 38.4895C37.677 39.2761 39.0607 39.6693 40.5756 39.6693C42.0903 39.6693 43.4741 39.2761 44.7267 38.4895C45.9793 37.703 47.0572 36.5961 47.9602 35.1685C48.8342 33.7411 49.5041 32.0224 49.9702 30.0123C50.4655 28.0023 50.7131 25.7739 50.7131 23.3268C50.7131 21.1144 50.5107 19.0805 50.1058 17.2253L50.8555 15.232C51.2822 14.0974 51.7865 13.107 52.3619 12.2515C52.5156 12.0282 52.6744 11.8151 52.8382 11.6118C52.9805 11.435 53.1266 11.2658 53.2765 11.1038L53.3093 11.0762C54.3237 12.0601 55.1915 13.1867 55.913 14.4564C57.3987 16.9909 58.1415 19.9622 58.1415 23.3706C58.1415 26.7789 57.3987 29.7647 55.913 32.3283C54.9255 34.0465 53.6635 35.5104 52.127 36.7199C52.7721 37.4259 53.4806 38.0158 54.2526 38.4895C55.5635 39.2761 57.02 39.6693 58.6222 39.6693C59.8166 39.6693 60.9527 39.4655 62.0306 39.0576C63.1375 38.6497 63.9823 38.14 64.5649 37.5282V26.3857C64.5649 25.3369 64.2445 24.492 63.6036 23.8511C62.9627 23.2103 62.1179 22.8898 61.0692 22.8898H60.9382V22.4528H72.8641C72.9844 19.4261 73.7066 16.7607 75.031 14.4564C76.5166 11.8929 78.5704 9.91196 81.1921 8.51367C83.8431 7.08629 86.9164 6.37259 90.4122 6.37259C93.9078 6.37259 96.9666 7.08629 99.5883 8.51367C102.239 9.91196 104.293 11.8929 105.75 14.4564C106.707 16.0893 107.356 17.9036 107.696 19.8992V10.917C107.696 9.86841 107.376 9.02351 106.735 8.38265C106.094 7.74179 105.249 7.42136 104.2 7.42136H104.157V6.98436H130.448C132.691 7.01345 134.643 7.40672 136.303 8.16415C137.993 8.89248 139.303 9.91196 140.236 11.223C140.587 11.7013 140.873 12.2109 141.096 12.7515C141.454 11.064 142.324 9.68049 143.705 8.60115C145.599 7.11538 148.09 6.37259 151.177 6.37259C151.935 6.37259 152.547 6.40169 153.013 6.46007C153.21 6.48323 153.402 6.50862 153.59 6.53642C153.874 6.57849 154.148 6.62575 154.411 6.67838C154.877 6.76586 155.416 6.83869 156.028 6.89688C156.64 6.95526 157.426 6.98436 158.387 6.98436H172.191V7.42136H172.06C171.011 7.42136 170.167 7.74179 169.526 8.38265C168.885 9.02351 168.564 9.86841 168.564 10.917V28.2645C168.564 31.3524 169.351 33.7995 170.924 35.6055C172.526 37.3826 174.682 38.271 177.391 38.271C180.129 38.271 182.285 37.3679 183.858 35.5619C185.431 33.7266 186.218 31.2942 186.218 28.2645V11.5725C186.218 10.3199 185.839 9.32948 185.082 8.60115C184.324 7.87281 183.319 7.47955 182.067 7.42136V6.98436H196.488L207.15 31.6728L217.812 6.98436H225.983V7.42136C225.051 7.42136 224.264 7.69805 223.623 8.25162C222.982 8.80501 222.691 9.56244 222.749 10.5237L224.978 36.392C225.123 37.3826 225.589 38.1254 226.376 38.6206C227.192 39.1158 227.993 39.3634 228.779 39.3634V39.7566H215.233V39.3634C215.729 39.3634 216.238 39.247 216.763 39.0138C217.287 38.7809 217.71 38.4458 218.03 38.0088C218.38 37.5718 218.511 37.0621 218.423 36.4795L216.282 12.359L204.135 40.3684L191.9 12.3153L189.846 35.2997C189.729 36.4648 190.064 37.4117 190.851 38.14C191.637 38.8682 192.599 39.2614 193.735 39.3198V39.7566H184.996V39.3198C186.102 39.2614 187.035 38.8537 187.792 38.0963C188.55 37.3388 188.986 36.392 189.103 35.256L191.288 11.0918C190.734 9.9557 190.035 9.06725 189.19 8.42639C189.046 8.30796 188.895 8.2001 188.735 8.10262C188.506 8.24643 188.293 8.41249 188.097 8.60115C187.339 9.32948 186.961 10.3199 186.961 11.5725V28.2645C186.961 30.7116 186.451 32.8382 185.431 34.6442C184.441 36.4504 182.999 37.8631 181.105 38.8828C179.241 39.8732 177.012 40.3684 174.42 40.3684C171.856 40.3684 169.628 39.8732 167.734 38.8828C165.841 37.8922 164.369 36.4939 163.321 34.6879C162.301 32.8526 161.791 30.7116 161.791 28.2645V10.917C161.791 9.86841 161.471 9.02351 160.83 8.38265C160.212 7.76495 159.405 7.44508 158.409 7.42266L158.824 15.8111H158.387C157.98 13.1018 157.106 10.9607 155.766 9.38768C154.425 7.81462 152.809 7.02809 150.915 7.02809C149.575 7.02809 148.497 7.42136 147.682 8.20788C146.895 8.99441 146.502 10.0432 146.502 11.354C146.502 12.49 146.866 13.5825 147.594 14.6313C148.352 15.6508 149.648 16.8452 151.483 18.2144L153.362 19.6127C155.285 21.011 156.8 22.3072 157.907 23.5016C159.043 24.6668 159.858 25.803 160.354 26.9099C160.849 28.0169 161.097 29.1967 161.097 30.4493C161.097 32.3719 160.616 34.0762 159.654 35.5617C158.693 37.0475 157.353 38.2127 155.634 39.0576C153.945 39.8732 151.949 40.3102 149.648 40.3684C148.891 40.3684 148.264 40.3393 147.769 40.2811C147.303 40.2227 146.837 40.1499 146.371 40.0626C145.905 39.9751 145.337 39.9023 144.667 39.8441C143.997 39.7859 143.079 39.7566 141.914 39.7566L140.384 28.3955H140.909C141.346 31.9786 142.336 34.7461 143.88 36.698C145.453 38.6206 147.463 39.5819 149.91 39.5819C151.716 39.5819 153.187 39.0722 154.324 38.0525C155.46 37.0329 156.028 35.7074 156.028 34.0762C156.028 33.3769 155.897 32.707 155.634 32.0661C155.401 31.4253 154.994 30.7407 154.411 30.0123C153.828 29.2842 153.056 28.4976 152.095 27.6527C151.134 26.7789 149.939 25.803 148.512 24.7251L146.72 23.3706C144.536 21.7101 143.021 20.2243 142.176 18.9135C141.909 18.4995 141.684 18.0738 141.502 17.6364C141.283 18.6935 140.861 19.6581 140.236 20.5303C139.303 21.8411 137.963 22.8754 136.216 23.6326C134.497 24.361 132.458 24.7251 130.098 24.7251H126.078V35.824C126.078 36.8727 126.398 37.7175 127.039 38.3583C127.68 38.9994 128.525 39.3198 129.574 39.3198H129.661V39.7566H104.157V39.3198H104.2C105.249 39.3198 106.094 38.9994 106.735 38.3583C107.376 37.7175 107.696 36.8727 107.696 35.824V26.8475C107.356 28.8498 106.707 30.6767 105.75 32.3283C104.293 34.8627 102.239 36.8436 99.5883 38.271C96.9666 39.6693 93.9078 40.3684 90.4122 40.3684C86.9164 40.3684 83.8431 39.6693 81.1921 38.271C78.5704 36.8436 76.5166 34.8627 75.031 32.3283C73.5804 29.7753 72.8521 26.8036 72.8461 23.4126C72.6498 23.5368 72.4674 23.6829 72.2992 23.8511C71.6583 24.492 71.3379 25.3369 71.3379 26.3857V37.5282C70.7553 38.1107 69.8231 38.6206 68.5413 39.0576C67.2887 39.4655 65.8613 39.7859 64.259 40.0189C62.686 40.252 61.1129 40.3684 59.5399 40.3684C55.7373 40.3684 52.4258 39.6951 49.6054 38.3481C47.0163 39.6951 44.0063 40.3684 40.5756 40.3684ZM94.5633 38.4895C93.3107 39.2761 91.9269 39.6693 90.4122 39.6693C88.8973 39.6693 87.5136 39.2761 86.2609 38.4895C85.0083 37.703 83.9451 36.5961 83.0711 35.1685C82.1681 33.7411 81.4689 32.0224 80.9736 30.0123C80.5076 28.0023 80.2745 25.7739 80.2745 23.3268C80.2745 20.8798 80.5076 18.6512 80.9736 16.6412C81.4689 14.602 82.1681 12.8689 83.0711 11.4415C83.9451 10.0139 85.0083 8.90694 86.2609 8.12041C87.5136 7.33388 88.8973 6.94062 90.4122 6.94062C91.9269 6.94062 93.3107 7.33388 94.5633 8.12041C95.8159 8.90694 96.8938 10.0139 97.7968 11.4415C98.6708 12.8689 99.3407 14.602 99.8068 16.6412C100.302 18.6512 100.55 20.8798 100.55 23.3268C100.55 25.7739 100.302 28.0023 99.8068 30.0123C99.3407 32.0224 98.6708 33.7411 97.7968 35.1685C96.8938 36.5961 95.8159 37.703 94.5633 38.4895ZM118.387 38.3583C117.978 38.7679 117.485 39.0466 116.909 39.1945C116.333 39.0466 115.84 38.7679 115.43 38.3583C114.79 37.7175 114.469 36.8727 114.469 35.824V10.917C114.469 9.86841 114.79 9.02351 115.43 8.38265C115.84 7.97308 116.333 7.69434 116.909 7.54664C117.485 7.69434 117.978 7.97308 118.387 8.38265C119.028 9.02351 119.349 9.86841 119.349 10.917V35.824C119.349 36.8727 119.028 37.7175 118.387 38.3583ZM128.656 24.1571H126.078V7.55238H128.612C129.865 7.55238 130.957 7.91655 131.89 8.64489C132.822 9.34394 133.536 10.3199 134.031 11.5725C134.555 12.8251 134.817 14.2525 134.817 15.8547C134.817 17.457 134.555 18.8844 134.031 20.137C133.536 21.3896 132.822 22.38 131.89 23.1083C130.987 23.8076 129.909 24.1571 128.656 24.1571Z"
        fill="#283841"
      ></path>
      <path
        d="M234.534 3.40477C234.534 5.08173 233.175 6.44116 231.498 6.44116C229.821 6.44116 228.461 5.08173 228.461 3.40477C228.461 1.72782 229.821 0.368378 231.498 0.368378C233.175 0.368378 234.534 1.72782 234.534 3.40477Z"
        fill="#283841"
      ></path>
    </svg>
  );
}
