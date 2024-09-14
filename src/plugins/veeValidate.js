import {defineRule} from 'vee-validate';

defineRule('required', (value) => {
  if (!value || !value.length) {
    return 'This field không được để trống';
  }

  return true
})
defineRule('name', (value) => {
  const regex = /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠ-ỹÀÁẢẠĂÂ-Ưăâä-ỹ]+(?:[-' ][a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠ-ỹÀÁẢẠĂÂ-Ưăâä-ỹ]+)*$/;
  if (!regex.test(value)) {
    return 'Tên không đúng định dạng';
  }

  return true
});
defineRule('string', (value) => {
  const regex = /[a-zA-Z0-9]/g;
  if (!regex.test(value)) {
    return 'Bắt buộc là chuỗi';
  }

  return true;
});
defineRule('email', (value) => {
  const regex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;
  if (!regex.test(value)) {
    return 'Email không đúng định dạng';
  }

  return true;
});
defineRule('number', (value) => {
  const regex = /[0-9]/g;
  if (!regex.test(value)) {
    return 'Bắt buộc là số';
  }

  return true;
});

defineRule('requiredImage', (value) => {
  if (value) {
    return true;
  }
  return 'Không được để trống';
});

defineRule('image', (value) => {
  if (value.type === 'image/png' || value.type === 'image/jpeg' || value.type === 'image/webp') {
    return true;
  }
  return 'Không đúng định dạng';
});

defineRule('min', (value, [limit]) => {
  if (value.length < limit) {
    return `Phải có ít nhất ${limit} ký tự`;
  }

  return true;
});

defineRule('max', (value, [limit]) => {
  if (value.length > limit) {
    return `Vượt quá ${limit} ký tự`;
  }

  return true;
});

defineRule('digits_between', (value, [min, max]) => {
  if (value.length < min || value.length > max) {
    return `Trường này phải từ ${min} đến ${max} ký tự`;
  }

  return true;
});

defineRule('confirmed', (value, [target]) => {
  if (value !== target) {
    return 'Mật khẩu không khớp';
  }
  return true;
});

defineRule('before_or_equal', (value)=>{
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  if (!regex.test(value)) {
    return 'Ngày sinh không đúng định dạng';
  }

  const birthdayDate = new Date(value);
  const currentDate = new Date();
  if (birthdayDate >= currentDate) {
    return 'Không được để ngày sinh trong tương lai';
  }

  return true
})
defineRule('requiredSelect', (value) => {
  if (!value) {
    return 'This field không được để trống';
  }

  return true
})