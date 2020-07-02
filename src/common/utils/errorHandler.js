export const handle = errors => {
  if (errors && errors.response) {
    const response = errors.response;

    const data = response && response.data;

    const message = (data && data.error && data.error.messages) || [
      'error',
    ];
    return {
      message: message,
    };
  }
  return ['Unexpected error'];
};
