const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbx3PgmdWyg01da-oFp1iqFQCymHAyMhxalUM4ubsVD2BkIQ3mb36kqRLgc8r9trx5Y6/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          source: "website",
          userAgent: navigator.userAgent,
        }),
      }
    );

    const result = await response.text();
    console.log("Response:", result);

    if (response.ok) {
      alert("Thank you for joining the waitlist!");
      setEmail("");
    } else {
      alert("Something went wrong. Please try again.");
    }
  } catch (error) {
    console.error(error);
    alert("Error submitting form.");
  } finally {
    setIsSubmitting(false);
  }
};
