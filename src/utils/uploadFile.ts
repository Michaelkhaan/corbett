const url = "https://www.corbett-server.cruxdevs.com";

const uploadFile = async (file:any) => {
  try {
    const formData = new FormData();
    formData.append(
      "operations",
      JSON.stringify({
        variables: {
          file: null,
        },
      })
    );
    formData.append("map", JSON.stringify({ 0: ["variables.file"] }));
    formData.append("0", file);
    const response = await fetch(`${url}/upload`, {
      method: "POST",
      body: formData,
    });
    const result = await response.json();
    return result.url;
  } catch (error) {
    throw new Error("File upload failed");
  }
};

export default uploadFile;
