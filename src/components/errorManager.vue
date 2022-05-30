<script>
export default {
  methods: {
    //Returns an friendly message for the errors
    friendlyMessage(error) {
      let errors = "";
      // If the api is not alive, the error.response is undefined
      // So the error message will explain that the api connection is out
      if (error.response.data === undefined)
        errors = "The connection of the api is not alive..";
      else 
        //otherwise return the error message
        // Note : The API already returns friendly message
        errors = error.response.data.message;    
      return errors;
    }
  },
};
</script>