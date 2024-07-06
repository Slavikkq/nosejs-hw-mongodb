import { ContactsCollection } from '../db/models/contact.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';
<<<<<<< Updated upstream
import { SORT_ORDER } from '../constants/index.js';
=======
import { saveFileToUploadDir } from '../utils/saveFileToUploadDir.js';
>>>>>>> Stashed changes

export const getAllContacts = async ({
  page = 1,
  perPage = 10,
  sortOrder = SORT_ORDER.ASC,
  sortBy = '_id',
  filter = {},
  userId,
}) => {
  const skip = (page - 1) * perPage;
  const contactsFilters = ContactsCollection.find({ userId });

  if (filter.isFavourite) {
    contactsFilters.where('isFavourite').equals(filter.isFavourite);
  }

  if (filter.contactType) {
    contactsFilters.where('contactType').equals(filter.contactType);
  }

  const [contactsCount, contacts] = await Promise.all([
    ContactsCollection.find().merge(contactsFilters).countDocuments(),
    ContactsCollection.find()
      .merge(contactsFilters)
      .skip(skip)
      .limit(perPage)
      .sort({ [sortBy]: sortOrder })
      .exec(),
  ]);

  const paginationData = calculatePaginationData(page, perPage, contactsCount);

  return {
    contacts,
    ...paginationData,
  };
};
<<<<<<< Updated upstream
  
  export const getContactById = async (contactId, userId) => {
    const contact = await ContactsCollection.findOne({ _id: contactId, userId });
    return contact;
  };
  
  export const createContact = async (payload) => {
    const contact = await ContactsCollection.create(payload);
    return contact;
  };
  
  export const patchContact = async (
    contactId,
    { photo, ...payload },
    userId,
    options = {},
  ) => {
    const rawResult = await ContactsCollection.findOneAndUpdate(
      { _id: contactId, userId },
      { ...payload, photo },
      { new: true, includeResultMetadata: true, ...options },
    ).where({ userId });
  
    if (!rawResult || !rawResult.value) return null;
    return {
      contact: rawResult.value,
      isNew: Boolean(rawResult?.lastErrorObject?.upserted),
    };
  };
  
  export const deleteContact = async (contactId, userId) => {
    const contact = await ContactsCollection.findOneAndDelete({
      _id: contactId,
      userId,
    });
  
    return contact;
  };
=======

export const getContactById = async (contactId, userId) => {
  return await ContactsCollection.findOne({ _id: contactId, userId: userId });
};

export const createContact = async (payload, userId) => {
  return await ContactsCollection.create({
    ...payload,
    userId: userId,
  });
};

export const updateContact = async (contactId, userId, updateData) => {
  return await ContactsCollection.findOneAndUpdate(
    { _id: contactId, userId: userId },
    updateData,
    { new: true },
  );
};

export const deleteContact = async (contactId, userId) => {
  const contact = await ContactsCollection.findOneAndDelete({
    _id: contactId,
    userId: userId,
  });

  return contact;
};
>>>>>>> Stashed changes
